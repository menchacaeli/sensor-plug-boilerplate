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
            // collecting sensor data from the helper function renderData and sending to server-side
            socket.on('orientation', function (data) {
                renderData(data);
            });

            // sensor-plug: self executing function, fires the orientation method.
            Device.handleOrientation();

            // helper function for orientation data, receiving the following:
            // Gamma: Rotation around the front-to-back axis
            // Beta: Rotation around the side-to-side axis
            // Alpha: Rotation around the vertical axis
            // In this demonstration the value changes in real-time.
            function renderData (oriObj) {
                // variables to retrieve the object data from sensor-plug lib
                var gammaValue = Math.round(oriObj.gamma);
                var betaValue = Math.round(oriObj.beta);
                var alphaValue = Math.round(oriObj.alpha);

                // The following variables give you an example of the data visualization.
                // The sensor data in this case will change the value in the html.
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
            // collecting sensor data from the helper function renderAccData and sending to server-side
            socket.on('acceleration', function (data) {
                renderAccData(data);
            });

            // sensor-plug: self executing function, fires the accelerometer method.
            Device.handleAcceleration();

            // helper function for accelerometer data, receiving the following:
            // X: The speed at which it moves side-to-side
            // Y: The speed at which it moves forward/back
            // Z: The speed at which it moves up/down
            // In this demonstration the value changes in real-time.
            function renderAccData (accObj) {
                // variables to retrieve the object data from sensor-plug lib
                var xValue = Math.round(accObj.accelerationX);
                var yValue = Math.round(accObj.accelerationY);
                var zValue = Math.round(accObj.accelerationZ);

                // The following variables give you an example of the data visualization.
                // The sensor data in this case will change the value in the html.
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
            // collecting sensor data from the helper function renderGeoData and sending to server-side
            socket.on('geolocation', function (data) {
                renderGeoData(data);
            });

            // Check for Geolocation API permissions
            // Lines 127 - 153 is a permission api from
            // https://developers.google.com/web/updates/2015/04/permissions-api-for-the-web
            // I will include this in my lib once tested live
            navigator.permissions.query({name:'geolocation'})
                .then(function(permissionStatus) {
                    console.log('geolocation permission state is ', permissionStatus.state);

                    permissionStatus.onchange = function() {
                        console.log('geolocation permission state has changed to ', this.state);
                    };
                });

            function log() {
                document.querySelector('#log').textContent += Array.prototype.join.call(arguments, '') + '\n';
            }

            var getNotBtn = document.getElementById('button-get-permission');

            getNotBtn.addEventListener('click', function() {
                Notification.requestPermission(function(result) {
                    if (result === 'denied') {
                        log('Permission wasn\'t granted.');
                        return;
                    } else if (result === 'default') {
                        log('The permission request was dismissed.');
                        return;
                    }
                    log('Permission was granted for notifications');
                });
            });

            // helper function for location data, receiving the following:
            // Latitude: specifies the north–south position of a point on the Earth's surface
            // Longitude: specifies the east-west position of a point on the Earth's surface
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
                // sensor-plug: self executing function, fires the handleGeolocation method.
                Device.handleGeolocation();
            });
        }
        // The End
    }
}]);

// HANDLES THE WEB VR SCENE
myApp.directive('webGlOrientation', ['$document', function($document) {
    return {
        link: function (scope, element, attr) {
            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight);

            var container = document.getElementById("webGlContainer");
            container.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff} );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            var light = new THREE.SpotLight( 0xffffff, 1.5 );
            light.position.set( 0, 500, 2000 );
            light.angle = Math.PI / 9;
            light.castShadow = true;
            light.shadow.camera.near = 1000;
            light.shadow.camera.far = 4000;
            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;
            scene.add( light );

            camera.position.z = 5;

            function animate() {
                requestAnimationFrame( animate );

                renderer.render(scene, camera);
            }

            socket.on('orientation', function (data) {
                renderData(data);
            });

            Device.handleOrientation();

            function renderData (oriObj) {
                var tiltLR = Math.round(oriObj.gamma);
                var tiltFB = Math.round(oriObj.beta);
                // var dir = oriObj.alpha;

                cube.rotation.z = parseInt(tiltLR) * Math.PI/-180;
                cube.rotation.x = parseInt(tiltFB) * Math.PI/180;

            }

            animate();

        }
    };
}]);
