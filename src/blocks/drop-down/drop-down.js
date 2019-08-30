class DropDown {
  constructor(root) {
    this.root = root;
    this.targetString;
    this._enableOptions();
  }

  _enableOptions() {
    this.targetString = this.root.childNodes[1].children[0];

    const text = this.targetString.innerHTML;

    this.targetString.addEventListener('click', () => {
      this.targetString.innerHTML = text;
    });
    for (let i = 0; i < this.root.childNodes[3].children.length; i += 1) {
      this.root.childNodes[3].children[i].addEventListener('click', () => {
        this.targetString.innerHTML = this.root.childNodes[3].children[i].innerHTML;
      });
    }
  }
}

const root = document.getElementsByClassName('js-drop-down');

Array.prototype.forEach.call(root, item => new DropDown(item));

