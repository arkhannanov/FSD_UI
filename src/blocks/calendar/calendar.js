import * as Const from './const';

const DayNames = Const.DayNames;
const StartOfWeek = Const.StartOfWeek;
const Events = Const.Events;
const ClassNames = Const.ClassNames;
const Defaults = Const.Defaults;
const MonthNames = Const.MonthNames;

class Calendar {
    constructor(root, {minDate, maxDate, selectedDate}) {
      this._root = root.calendarElem;
      this._dayElem = root._dayElem;
      this._header = root._header;
      this._monthElem = root._monthElem;
      this._prevBtn = root._prevBtn;
      this._nextBtn = root._nextBtn;

      this._minDate = minDate || Defaults.minDate;
      this._maxDate = maxDate || Defaults.maxDate;
      
      this._localize();
      
      this._createUi();
      
      this.setDate(selectedDate || new Date());
    }
    
    /*
     * Public
     */
    today() {
      const today = new Date();
      this._month = today.getMonth();
      this._year = today.getFullYear();
      this._date = today.getDate();
      this._selectedDate = today;

      this._updateUi();
    }

    setDate(date) {
      if (date.getTime() < this._minDate.getTime()) {
        return;
      }
      
      if (date.getTime() > this._maxDate.getTime()) {
        return;
      }
      
      this._selectedDate = date;
      
      this.reset();
    }
  
    reset() {
      this._month = this._selectedDate.getMonth();
      this._year = this._selectedDate.getFullYear();
      this._date = this._selectedDate.getDate();

  
      this._updateUi();
    }
    
    prevMonth() {
      if (this._isMinMonth()) {
        return;
      }
      
      if (--this._month < 0) {
        this._month += 12;
        this._year--;
      }
      
      this._updateUi();
    }
    
    nextMonth() {
      if (this._isMaxMonth()) {
        return;
      }
      
      if (++this._month >= 12) {
        this._month -= 12;
        this._year++;
      }
      
      this._updateUi();
    }
    
    /*
     * Private
     */
  
    _localize(locale) {

        locale='en-IE';

    //   locale = locale ||
    //     (navigator.languages && navigator.languages[0]) ||
    //     navigator.language ||
    //     navigator.userLanguage;
      
      const date = new Date();
      date.setDate(date.getDate() - date.getDay());
  
      this._dayNames = DayNames.map((defaultDay, i) => {
        const date = new Date();
        date.setDate(date.getDate() - date.getDay() + i);
        return date.toLocaleString(locale, {weekday: 'short'}) || defaultDay;
      });
      
      this._monthNames = MonthNames.map((defaultMonth, i) => {
        const date = new Date();
        date.setMonth(i);
        return date.toLocaleString(locale, {month: 'long'}) || defaultMonth;
      });
      
      this._startOfWeek = StartOfWeek[locale] || 0;
    }
    
    _createUi() {

      this._header.appendChild(document.createTextNode(' '));
      this._prevBtn.addEventListener('click', () => {
        this.prevMonth();
      });
      this._nextBtn.addEventListener('click', () => {
        this.nextMonth();
      });

      const table = document.createElement('table');
      table.className = ClassNames.TABLE;

      const tableHead = document.createElement('thead');
      tableHead.className = ClassNames.TABLE_HEAD;

      const tableHeadRow = document.createElement('tr');
      tableHeadRow.className = ClassNames.TABLE_ROW;

      for (let i = 0; i < 7; i++) {
        const day = this._dayNames[(i + this._startOfWeek) % 7];
        const colHeader = document.createElement('th');
        colHeader.scope = 'col';
        colHeader.className = ClassNames.TABLE_COL_HEADER;
        colHeader.textContent = day;
        tableHeadRow.appendChild(colHeader);
      }

      tableHead.appendChild(tableHeadRow);
      table.appendChild(tableHead);

      this._tableBody = document.createElement('tbody');
      this._tableBody.className = ClassNames.TABLE_BODY;
      this._tableBody.addEventListener('click', (event) => {
        const target = event.target;

        if (
          target.classList.contains(ClassNames.TABLE_CELL) &&
          target.dataset.date
        ) {
          const event = new CustomEvent(Events.DATE_SELECTED, {
            detail: {
              date: new Date(
                this._year,
                this._month,
                target.dataset.date,
              ),
            },
          });

          this._root.dispatchEvent(event);
        }
      });
      table.appendChild(this._tableBody);

      this._root.appendChild(table);

      tableHead.appendChild(tableHeadRow);

      this._footer = document.createElement('div');

      this._footer.className = ClassNames.FOOTER;
      this._footer.innerHTML="TODAY";
      this._footer.addEventListener('click', () => {
        this.today();
      });

      table.appendChild(this._footer);

    }
    
    _updateUi() {
      this._monthElem.textContent = this._monthNames[this._month];
      this._dayElem.textContent = this._date;
  
      if (this._isMinMonth()) {
        this._prevBtn.classList.add(ClassNames.BTN_DISABLED);
      } else {
        this._prevBtn.classList.remove(ClassNames.BTN_DISABLED);
      }
      
      if (this._isMaxMonth()) {
        this._nextBtn.classList.add(ClassNames.BTN_DISABLED);
      } else {
        this._nextBtn.classList.remove(ClassNames.BTN_DISABLED);
      }
  
      this._tableBody.innerHTML = '';
      
      const date = new Date(this._year, this._month, 1);
      date.setDate(1 - (date.getDay() + 7 - this._startOfWeek) % 7);
      
      do {
        const row = document.createElement('tr');
        
        for (let i = 0; i < 7; i++) {
          const cell = document.createElement('td');
          cell.classList.add(ClassNames.TABLE_CELL);
          
          if (date.getMonth() == this._month) {
            cell.textContent = date.getDate();
            
            if (
              (this._minDate.getTime() <= date.getTime()) &&
              (this._maxDate.getTime() >= date.getTime())
            ) {
              cell.dataset.date = date.getDate();
              if (date.getTime() == new Date(
                this._selectedDate.getFullYear(),
                this._selectedDate.getMonth(),
                this._selectedDate.getDate()
              ).getTime()) {
                  cell.classList.add(ClassNames.TABLE_CELL_SELECTED);
              }
            } else {
              cell.classList.add(ClassNames.TABLE_CELL_DISABLED);
            }
          }
  
          row.appendChild(cell);
  
          date.setDate(date.getDate() + 1);
        }
        
        this._tableBody.appendChild(row);
      } while (date.getMonth() == this._month);
    }
    
    _isMinMonth() {
      return (
        (this._month == this._minDate.getMonth()) &&
        (this._year == this._minDate.getFullYear())
      );
    }
    
    _isMaxMonth() {
      return (
        (this._month == this._maxDate.getMonth()) &&
        (this._year == this._maxDate.getFullYear())
      );
    }
  }


const root = {
  calendarElem : document.getElementsByClassName('page-calendar')[0],
 _dayElem : document.getElementsByClassName('calendar__day')[0],
  _header : document.getElementsByClassName('calendar__header')[0],
  _monthElem: document.getElementsByClassName('calendar__month')[0],
  _prevBtn: document.getElementsByClassName('calendar__btn-prev')[0],
  _nextBtn: document.getElementsByClassName('calendar__btn-next')[0],
  _tableContainer: document.getElementsByClassName('calendar__table-container')[0],
}

  window.onload = () => {
    if (root != null) {
      const today = new Date();
      
      const calendar = new Calendar(root, {
        minDate: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        ),
        maxDate: new Date(
          today.getFullYear() + 1,
          today.getMonth(),
          today.getDate()
        ),
      });

      root.calendarElem.addEventListener(Events.DATE_SELECTED, (event) => {
        calendar.setDate(event.detail.date);
      });
    }
  };
  