document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                document.getElementById('coordinates').value = `${latitude}, ${longitude}`;
                getCityFromCoordinates(latitude, longitude);
            });
        }

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var city = document.getElementById('city').value;
            var coordinates = document.getElementById('coordinates').value;
            var message = document.getElementById('message').value;
            var date = new Date().toLocaleString();

            var application = {
                name,
                phone,
                email,
                city,
                coordinates,
                message,
                date
            };

            var applications = JSON.parse(localStorage.getItem('applications')) || [];
            applications.push(application);
            localStorage.setItem('applications', JSON.stringify(applications));

            contactForm.reset();
            alert('Ваша заявка отправлена!');
        });
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
