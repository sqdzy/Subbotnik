    var clickedLatitude = null;
    var clickedLongitude = null;

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            })

        $.ajax({
    url: '/get_markers/',
    method: 'GET',
    success: function(data) {
        var markers = JSON.parse(data);
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i].fields; // Изменено здесь
            var coords = [marker.latitude, marker.longitude];
            console.log(coords)
            // Выбираем цвет метки в зависимости от уровня загрязнения.
            var color;
            switch (marker.pollutionLevel) {
                case 'smallTrash':
                    color = 'green';
                    break;
                case 'largeTrash':
                    color = 'yellow';
                    break;
                case 'dump':
                    color = 'red';
                    break;
            }

            // Создаем метку.
            var myPlacemark = new ymaps.Placemark(coords, {
                hintContent: marker.markerName,
                balloonContent: '<div style="display: flex; justify-content: space-between;">' + '<p>' + marker.description+ '</p>' + '</div>' + '<br> <img src="/media/' + marker.photo + '" width="320" height="320"/>' + '<p>От пользователя: ' + marker.user+ '</p>',
            }, {
                preset: 'islands#' + color + 'DotIcon'
            });

            // Добавляем метку на карту.
            myMap.geoObjects.add(myPlacemark);
        }
    }
});

    myMap.events.add('click', function (e) {
        // Получаем координаты клика.
        var coords = e.get('coords');
        clickedLatitude = coords[0];
        clickedLongitude = coords[1];

        // Заполняем текстовые поля.
        document.getElementById('latitude').value = clickedLatitude;
        document.getElementById('longitude').value = clickedLongitude;

        // Получаем данные из формы.
        var markerName = document.getElementById('markerName').value;
        var description = document.getElementById('description').value;
        var pollutionLevel = document.getElementById('pollutionLevel').value;
        var photo = document.getElementById('photo').files[0]; // Это файл, его можно использовать для загрузки на сервер или других целей.

        // Создаем метку.
        var myPlacemark = new ymaps.Placemark(coords, {
            hintContent: markerName,
            balloonContent: description + '<br> <img src="' + URL.createObjectURL(photo) + '" width="640" height="640"/>',
        });

        // Добавляем метку на карту.
        myMap.geoObjects.add(myPlacemark);
    });

}
