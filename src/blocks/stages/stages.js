class Stages {
  constructor(root) {
    this.sections = root.sections;
    this.points = root.points;
    this.pointsArray = [];
    this.targetPoint;
    this.createSections();
    this.createPoints();
    this.enablePoints();
    this.fillArray();
    this.fillStages();
  }

  createSections() {
    const numberOfSections = this.sections.dataset.numberOfPoints - 1;

    for (let i = 0; i < numberOfSections; i += 1) {
      const section = document.createElement('div');
      section.classList.add('stages__section');
      section.style.width = `${this.sections.offsetWidth / numberOfSections}px`;

      this.sections.appendChild(section);
    }
  }

  createPoints() {
    const numberOfPoints = this.sections.dataset.numberOfPoints;
    this.targetPoint = this.sections.dataset.startPoint;

    for (let i = 0; i < numberOfPoints; i += 1) {
      const point = document.createElement('div');
      point.innerHTML = i + 1;
      point.classList.add('stages__point');
      this.points.appendChild(point);
    }
  }

  fillArray() {
    for (let i = 0; i < this.points.childNodes.length; i += 1) {
      if (i < this.targetPoint) {
        this.pointsArray[i] = true;
      } else {
        this.pointsArray[i] = false;
      }
    }

    this.fillStages();
  }

  enablePoints() {
    for (let i = 0; i < this.points.childNodes.length; i += 1) {
      this.points.childNodes[i].addEventListener('click', () => {
        this.targetPoint = i + 1;
        this.fillArray();
      });
    }
  }

  fillStages() {
    if (this.pointsArray[0] === true) {
      this.points.children[0].classList.add('stages__point_color_orange');
    }

    for (let i = 0; i < this.pointsArray.length; i += 1) {
      if (i > 0 && this.pointsArray[i] === true) {
        this.points.children[i].classList.add('stages__point_color_orange');
        this.sections.children[i - 1].classList.add('stages__section_color_orange');
      }
      if (i > 0 && this.pointsArray[i] === false) {
        this.points.children[i].classList.remove('stages__point_color_orange');
        this.sections.children[i - 1].classList.remove('stages__section_color_orange');
      }
    }
  }
}

const root = {
  sections: document.getElementsByClassName('stages__sections')[0],
  points: document.getElementsByClassName('stages__points')[0],
};

if (typeof root.sections !== 'undefined') {
  console.log('Тест');
  new Stages(root);
}
