class Stages {
  constructor(root) {
    this.root = root;

    this.pointsArray = [];
    this.targetPoint;

    this.startStages();
  }

  startStages() {
    this.enableElements();
    this.createSections();
    this.createPoints();
    this.enablePoints();
    this.fillArray();
    this.fillStages();
  }

  enableElements() {
    this.root.sections = this.root.children[0];
    this.root.points = this.root.children[1];
  }


  createSections() {
    const numberOfSections = this.root.sections.dataset.numberOfPoints - 1;

    for (let i = 0; i < numberOfSections; i += 1) {
      const section = document.createElement('div');
      section.classList.add('stages__section');
      section.style.width = `${this.root.sections.offsetWidth / numberOfSections}px`;

      this.root.sections.appendChild(section);
    }

    this.root.points.style.width = `${this.root.sections.offsetWidth + 30}px`;
  }

  createPoints() {
    const numberOfPoints = this.root.sections.dataset.numberOfPoints;
    this.targetPoint = this.root.sections.dataset.startPoint;

    for (let i = 0; i < numberOfPoints; i += 1) {
      const point = document.createElement('div');
      point.innerHTML = i + 1;
      point.classList.add('stages__point');
      this.root.points.appendChild(point);
    }
  }

  fillArray() {
    for (let i = 0; i < this.root.points.childNodes.length; i += 1) {
      if (i < this.targetPoint) {
        this.pointsArray[i] = true;
      } else {
        this.pointsArray[i] = false;
      }
    }

    this.fillStages();
  }

  enablePoints() {
    for (let i = 0; i < this.root.points.childNodes.length; i += 1) {
      this.root.points.childNodes[i].addEventListener('click', () => {
        this.targetPoint = i + 1;
        this.fillArray();
      });
    }
  }

  fillStages() {
    if (this.pointsArray[0] === true) {
      this.root.points.children[0].classList.add('stages__point_color_orange');
    }

    for (let i = 0; i < this.pointsArray.length; i += 1) {
      if (i > 0 && this.pointsArray[i] === true) {
        this.root.points.children[i].classList.add('stages__point_color_orange');
        this.root.sections.children[i - 1].classList.add('stages__section_color_orange');
      }
      if (i > 0 && this.pointsArray[i] === false) {
        this.root.points.children[i].classList.remove('stages__point_color_orange');
        this.root.sections.children[i - 1].classList.remove('stages__section_color_orange');
      }
    }
  }
}

const root = document.getElementsByClassName('js-stages');

Array.prototype.forEach.call(root, item => new Stages(item));
