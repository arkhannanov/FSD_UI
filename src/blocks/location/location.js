ymaps.ready(init);

function init () {
    let myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты
        center:[37.787509, -122.444838], 
        // Масштаб, тут все просто
        zoom: 13,
        // Отключаем все элементы управления
        controls: []
    }); 
            
    let myGeoObjects = [];
    
    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([37.787509, -122.444838],{
                    balloonContentBody: 'Location',
                    },{
                    iconLayout: 'default#image',
                    // Путь до нашей картинки
                    iconImageHref: './src/blocks/location/images/location-icon.png', 
                    // Размер по ширине и высоте
                    iconImageSize: [41, 56],
                    // Смещение левого верхнего угла иконки относительно
                    // её «ножки» (точки привязки).
                    iconImageOffset: [-35, -35]
    });
                
    let clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    myMap.behaviors.disable('scrollZoom');
}