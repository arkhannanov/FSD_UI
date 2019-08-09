class Location {
  constructor(myMap) {
    this.createGeoObjects(myMap);
  }

  createGeoObjects(myMap) {
    const myGeoObjects = new ymaps.Placemark([37.787509, -122.444838], {
      balloonContentBody: 'Location',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './src/blocks/location/images/location-icon.png',
      iconImageSize: [41, 56],
      iconImageOffset: [-35, -35]
    });

    const clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    myMap.behaviors.disable('scrollZoom');
  }
}

export default Location;