import Location from './location';

function init() {
  const myMap = new ymaps.Map('map', {
    center: [37.787509, -122.444838],
    zoom: 13,
    controls: [],
  });

  const map = new Location(myMap);
}

if (typeof ymaps !== 'undefined') {
  ymaps.ready(init);
}