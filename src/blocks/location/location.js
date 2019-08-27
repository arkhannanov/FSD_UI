class Location {
  constructor(root) {
    this.root = root;
    this.myMap;
    this.createGeoObjects();
  }

  createMyMap(map) {
    this.myMap = new map.Map(this.root, {
      center: [37.787509, -122.444838],
      zoom: 13,
      controls: [],
    });
  }

  createGeoObjects() {
    ymaps.load().then((map) => {
      this.createMyMap(map);

      const myGeoObjects = new map.Placemark([37.787509, -122.444838], {
        balloonContentBody: 'Location',
      }, {
        iconLayout: 'default#image',
        iconImageHref: './src/blocks/location/images/location-icon.png',
        iconImageSize: [41, 56],
        iconImageOffset: [-35, -35]
      });

      const clusterer = new map.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
      });

      clusterer.add(myGeoObjects);
      this.myMap.geoObjects.add(clusterer);
      this.myMap.behaviors.disable('scrollZoom');
    });
  }
}

const root = document.getElementsByClassName('js-location__map');

Array.prototype.forEach.call(root, item => new Location(item));