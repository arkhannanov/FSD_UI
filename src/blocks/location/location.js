if (typeof ymaps !== 'undefined') {
  ymaps.ready(init);
}

function init() {
  const myMap = new ymaps.Map('map', {
    center: [37.787509, -122.444838],
    zoom: 13,
    controls: []
  });

  let myGeoObjects = [];

  myGeoObjects = new ymaps.Placemark([37.787509, -122.444838], {
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
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable('scrollZoom');
}
