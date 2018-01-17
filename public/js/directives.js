// link: allows for DOM modification, it is executed after the template is loaded and
// is where logic for each sensor will be executed.

'use strict';
var socket = io();

// TOGGLES THE MENU/NAV-BAR
myApp.directive('toggleMenu', ['$document', function($document) {
    return {
        link: function (scope, element, attr) {

            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                    $el.addEventListener('click', function () {

                        // Get the target from the "data-target" attribute
                        var target = $el.dataset.target;
                        var $target = document.getElementById(target);

                        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }
            // The End
        }
    };
}]);

// HANDLES THE DEVICE ORIENTATION EVENT
myApp.directive('deviceOrientation', ['$document', function($document) {
    return {
        link: function (scope, element, attr) {
            // collecting sensor data from the helper function renderData and sending to back-end
            socket.on('orient', function (data) {
                renderData(data);
            });

            // sensor-plug: self executing function, fires the orientation method.
            Device.handleOrientation();

            // helper function for orientation data, receiving the following:
            // Gamma:
            // Beta:
            // Alpha:
            // In this demonstration the value changes in real-time.
            function renderData (oriObj) {
                // variables to retrieve the object data from sensor-plug lib
                var gammaValue = Math.round(oriObj.gamma);
                var betaValue = Math.round(oriObj.beta);
                var alphaValue = Math.round(oriObj.alpha);

                var gammaObj = document.getElementById('gamma');
                gammaObj.setAttribute('value', gammaValue);

                var betaObj = document.getElementById('beta');
                betaObj.setAttribute('value', betaValue);

                var alphaObj = document.getElementById('alpha');
                alphaObj.setAttribute('value', alphaValue);

            }
        }
        // The End
    };
}]);

// HANDLES THE DEVICE ACCELERATION EVENT
myApp.directive('deviceAcceleration', ['$document', function($document) {
    return {
        link: function (scope, element, attr) {
            // collecting sensor data from the helper function renderAccData and sending to back-end
            socket.on('motion', function (data) {
                renderAccData(data);
            });

            // sensor-plug: self executing function, fires the accelerometer method.
            Device.handleAcceleration();

            // helper function for accelerometer data, receiving the following:
            // X:
            // Y:
            // Z:
            // In this demonstration the value changes in real-time.
            function renderAccData (accObj) {
                // variables to retrieve the object data from sensor-plug lib
                var xValue = Math.round(accObj.accelerationX);
                var yValue = Math.round(accObj.accelerationY);
                var zValue = Math.round(accObj.accelerationZ);

                var x = document.getElementById('acceleration-x');
                x.setAttribute('value', xValue);

                var y = document.getElementById('acceleration-y');
                y.setAttribute('value', yValue);

                var z = document.getElementById('acceleration-z');
                z.setAttribute('value', zValue);

            }
        }
        // The End
    };
}]);

// HANDLES THE GEOLOCATION EVENT
myApp.directive('deviceGeolocation', ['$document', function ($document) {
    return {
        link: function (scope, element, attr) {
            // collecting sensor data from the helper function renderGeoData and sending to back-end
            socket.on('location', function (data) {
                renderGeoData(data);
            });

            // helper function for accelerometer data, receiving the following:
            // Latitude:
            // Longitude:
            // In this demonstration the user will be tracked when click event is fired.
            function renderGeoData(geoObj) {
                // variables to retrieve the object data from sensor-plug lib
                var latValue = geoObj.latitude;
                var lonValue = geoObj.longitude;

                var latitude = document.getElementById("latitude");
                latitude.innerHTML = latValue;

                var longitude = document.getElementById("longitude");
                longitude.innerHTML = lonValue;
            }

            // click event to fire sensor-plug method below
            document.getElementById('button-get-position').addEventListener('click', function() {
                // sensor-plug: self executing function, fires the Geolocation method.
                Device.handleGeolocation();

            });
        }
        // The End
    }
}]);

