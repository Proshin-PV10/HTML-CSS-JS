document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var coordinatesInput = document.getElementById('coordinates');
                if (coordinatesInput) {
                    coordinatesInput.value = `${latitude}, ${longitude}`;
                }
                getCityFromCoordinates(latitude, longitude);
            });
        } else {
            document.write("Нет поддержки HTML5 Geolocation.");
        }

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var nameInput = document.getElementById('name');
            var phoneInput = document.getElementById('phone');
            var emailInput = document.getElementById('email');
            var cityInput = document.getElementById('city');
            var coordinatesInput = document.getElementById('coordinates');
            var messageInput = document.getElementById('message');

            if (nameInput && phoneInput && emailInput && cityInput && coordinatesInput && messageInput) {
                var application = {
                    name: nameInput.value,
                    phone: phoneInput.value,
                    email: emailInput.value,
                    city: cityInput.value,
                    coordinates: coordinatesInput.value,
                    message: messageInput.value,
                    date: new Date().toLocaleString()
                };

                var applications = JSON.parse(localStorage.getItem('applications')) || [];
                applications.push(application);
                localStorage.setItem('applications', JSON.stringify(applications));

                contactForm.reset();
                alert('Ваша заявка отправлена!');
            } else {
                alert('Некоторые поля формы не найдены.');
            }
        });
    } else {
        console.error("Форма обратной связи не найдена.");
    }
});

function getCityFromCoordinates(lat, lon) {
    var moscowBounds = {
        north: 55.8,
        south: 55.4,
        east: 37.7,
        west: 37.4
    };

    var spbBounds = {
        north: 59.9,
        south: 59.8,
        east: 30.5,
        west: 30.2
    };

    var city = '';

    if (lat <= moscowBounds.north && lat >= moscowBounds.south && 
        lon <= moscowBounds.east && lon >= moscowBounds.west) {
        city = 'Москва';
    } else if (lat <= spbBounds.north && lat >= spbBounds.south && 
               lon <= spbBounds.east && lon >= spbBounds.west) {
        city = 'Санкт-Петербург';
    } 

    var cityInput = document.getElementById('city');
    if (cityInput) {
        cityInput.value = city;
    }
}
