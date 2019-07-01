let inputValue = 0;

class Search {
    constructor(root) {
        this.search = root.search;
        this.searchIcon = root.searchIcon;
        this.searchError = root.searchError;
        this.enableSearchClick();
        this.enableSearchIcon();
        this.enableSearchKeyup();
    }

    enableSearchClick() {
        this.search.addEventListener('click', this.clickSearch.bind(this));
    }

    enableSearchIcon() {
        this.searchIcon.addEventListener('click', this.clickButton.bind(this));
    }

    enableSearchKeyup() {
        this.search.addEventListener('keyup', this.inputSearch.bind(this));
    }

    inputSearch(element) {
        const usedInput = element.target;
        inputValue = usedInput.value;
    }


    clickSearch() {
        this.searchError.style.cssText = 'background: transparent;';
        this.searchError.innerHTML = '';
    }

    clickButton() {
        if (inputValue.length === 0) {
            this.searchError.style.cssText = 'background: transparent;';
            this.searchError.innerHTML = '';
        } else {
            this.searchError.style.cssText = 'background-image: url(\'./src/blocks/search/images/search-icon.png\'); background-repeat: no-repeat; background-position: 273px 6px; background-color: #e75735;';
            this.searchError.innerHTML = 'I’ve not found what I’m looking for...';
        }
    }
}

const root = {
    search: document.getElementById('search'),
    searchIcon: document.getElementById('search__icon'),
    searchError: document.getElementById('search__error'),
};

new Search(root);
