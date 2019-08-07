import Const from './const';

const {MonthNames, DayNames, StartOfWeek, Events, ClassNames, Defaults} = Const;

class Calendar {
  constructor(root, {minDate, maxDate, selectedDate}) {
    this.root = root;

    this._minDate = minDate || Defaults.minDate;
    this._maxDate = maxDate || Defaults.maxDate;

    this.selectElements();
    this.setItemsSize();

    this._localize();

    this._createUi();

    this.setDate(selectedDate || new Date());
  }

  setItemsSize() {


    //



  }

  selectElements() {
    this.root.dayElem = this.root.childNodes[1].children[0];
    this.root.header = this.root.childNodes[3];
    this.root.monthElem = this.root.childNodes[3].children[0];
    this.root.previosButton = this.root.childNodes[3].children[1];
    this.root.nextButton = this.root.childNodes[3].children[2];
  }

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

  previosMonth() {


    if (this._isMinMonth()) {
      return;
    }

    this._month = this._month - 1;

    if (this._month < 0) {
      this._month += 12;
      this._year -= 1;
    }

    this._updateUi();
  }

  nextMonth() {
    if (this._isMaxMonth()) {
      return;
    }

    this._month = this._month + 1;

    if (this._month >= 12) {
      this._month -= 12;
      this._year += 1;
    }

    this._updateUi();
  }

  /*
   * Private
   */

  _localize(locale) {

    locale = 'en-IE';

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

    if (this.root.dataset.monthSize !== '') {
      this.root.monthElem.style.fontSize = `${this.root.dataset.monthSize}`;
    }

    this.root.header.appendChild(document.createTextNode(' '));
    this.root.previosButton.addEventListener('click', () => {
      this.previosMonth();
    });
    this.root.nextButton.addEventListener('click', () => {
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
      if (this.root.dataset.dayNameSize !== '') {
        colHeader.style.fontSize = `${this.root.dataset.dayNameSize}`;
        }
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

        this.root.dispatchEvent(event);
      }
    });
    table.appendChild(this._tableBody);

    this.root.appendChild(table);

    tableHead.appendChild(tableHeadRow);

    this._footer = document.createElement('div');

    this._footer.className = ClassNames.FOOTER;
    this._footer.innerHTML = "TODAY";
    if (this.root.dataset.todaySize !== '') {
      this._footer.classList.add('js-calendar__item-table-footer_size_larger');
    }

    this._footer.addEventListener('click', () => {
      this.today();
    });

    table.appendChild(this._footer);

  }

  _updateUi() {
    this.root.monthElem.textContent = this._monthNames[this._month];
    this.root.dayElem.textContent = this._date;

    if (this._isMinMonth()) {
      this.root.previosButton.classList.add(ClassNames.BUTTON_DISABLED);
    } else {
      this.root.previosButton.classList.remove(ClassNames.BUTTON_DISABLED);
    }

    if (this._isMaxMonth()) {
      this.root.nextButton.classList.add(ClassNames.BUTTON_DISABLED);
    } else {
      this.root.nextButton.classList.remove(ClassNames.BUTTON_DISABLED);
    }

    this._tableBody.innerHTML = '';

    const date = new Date(this._year, this._month, 1);
    date.setDate(1 - (date.getDay() + 7 - this._startOfWeek) % 7);

    do {
      const row = document.createElement('tr');

      for (let i = 0; i < 7; i += 1) {
        const cell = document.createElement('td');
        cell.classList.add(ClassNames.TABLE_CELL);

        if (this.root.dataset.daySize !== '') {
          cell.style.fontSize = `${this.root.dataset.daySize}`;
        }

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

const root = document.getElementsByClassName('js-calendar__item');

for (let i = 0; i < root.length; i += 1) {
  window.onload = () => {
    if (root[i] != null) {
      const today = new Date();

      const calendar = new Calendar(root[i], {
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

      root[i].addEventListener(Events.DATE_SELECTED, (event) => {
        calendar.setDate(event.detail.date);
      });
    }
  };
};


  