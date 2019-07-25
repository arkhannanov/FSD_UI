class Search {
  constructor(root) {
    this.root = root;
    this.searchInput = null;
    this.searchIcon = null;
    this.value = 0;
    this.initSearch();
    this.enableSearchIcon();
    this.enableSearchKeyup();
    this.enableSearchClick();
  }

  initSearch() {

    const isTrue = (this.root.dataset.error === 'true');

    const inputContainder = document.createElement('div');
    inputContainder.classList.add('search__input-container');
    this.searchInput = document.createElement('input');
    this.searchInput.type = 'text';
    this.searchInput.placeholder = 'Search';
    this.searchInput.classList.add('search__input');

    if (isTrue) {
      this.searchInput.classList.add('search__input_error');
      this.searchInput.value = 'I’ve not found what I’m looking for...';
    }

    this.searchIcon = document.createElement('button');
    this.searchIcon.classList.add('search__icon');
    this.root.appendChild(inputContainder);
    inputContainder.appendChild(this.searchInput);
    inputContainder.appendChild(this.searchIcon);
  }

  enableSearchIcon() {
    this.searchIcon.addEventListener('click', this.clickButton.bind(this));
  }

  enableSearchKeyup() {
    this.searchInput.addEventListener('keyup', this.inputSearch.bind(this));
  }

  enableSearchClick() {
    this.searchInput.addEventListener('click', this.clearInput.bind(this));
  }

  inputSearch(element) {
    const usedInput = element.target;
    this.value = usedInput.value;
  }

  clearInput() {
    this.searchInput.classList.remove('search__input_error');
    this.searchInput.value = '';
  }

  clickButton() {
    if (this.value.length > 0) {
      this.searchInput.classList.add('search__input_error');
      this.searchInput.value = 'I’ve not found what I’m looking for...';
    }
  }
}

const root = document.getElementsByClassName('search');

for (let i = 0; i < root.length; i += 1) {
  new Search(root[i]);
}
