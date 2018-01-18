/**
 * Created by elimenchaca on 11/9/17.
 */
myApp.controller('welcomePageController', function ($scope) {
    $scope.greeting = {
        title: 'sensor-plug.',
        subtitle: ''
    };
    $scope.link = {
        text: 'npm install sensor-plug'
    };
    $scope.intro = {
        messageOne: 'Sensor-plug takes away the heavy lifting by providing JavaScript modules that access sensor data using the standard W3C API.',
        messageTwo: 'By packaging the code for device sensor events, sensor-plug allows for a smooth experience for developers.',
        messageThree: 'Sensor-plug provides detailed documentation as well as specific code examples to help new users get started.'
    }
});

myApp.controller('orientationPageController', function ($scope) {
    $scope.greeting = {
        title: 'Device Orientation',
        subtitle: 'The device orientation event, is sent when the accelerometer detects a change to the orientation of the device.'
    };
    $scope.browser = {
        title: 'Web Browser Support',
        subtitle: 'The select list of browsers that may or may not play nicely with the device orientation event.',
        btn: 'Support'
    };
    $scope.mobile = {
        title: 'Mobile Browser Support',
        subtitle: 'The mobile browsers that play nicely with the device orientation event.',
        btn: 'Support'
    };
    $scope.demo = {
        title: 'Demo',
        subtitle: 'This example will work on any browser supporting the device orientation event and running on a device able to detect its orientation.',
        btn: 'Code'
    };
    $scope.example = {
        title: 'Device Orientation Coordinates',
        subtitle: 'The value reported for each axis indicates the amount of rotation around a given axis.',
        gamma: 'Gamma',
        beta: 'Beta',
        alpha: 'Alpha'
    }
});

myApp.controller('accelerationPageController', function ($scope) {
    $scope.greeting = {
        title: 'Device Acceleration',
        subtitle: 'The device acceleration event, is sent when the accelerometer detects a change in acceleration.'
    };
    $scope.browser = {
        title: 'Web Browser Support',
        subtitle: 'The select list of browsers that may or may not play nicely with the device acceleration event.',
        btn: 'Support'
    };
    $scope.mobile = {
        title: 'Mobile Browser Support',
        subtitle: 'The mobile browsers that play nicely with the device acceleration event.',
        btn: 'Support'
    };
    $scope.demo = {
        title: 'Demo',
        subtitle: 'This example will work on any browser supporting the device acceleration event and running on a device able to detect its acceleration.',
        btn: 'Code'
    };
    $scope.example = {
        title: 'Device Acceleration',
        subtitle: 'The value reported for each axis indicates the amount of rotation around a given axis.',
        accX: 'Acceleration X',
        accY: 'Acceleration Y',
        accZ: 'Acceleration Z'
    }
});

myApp.controller('geolocationPageController', function ($scope) {
    $scope.greeting = {
        title: 'Device Geolocation',
        subtitle: 'Device Geolocation allows you to pinpoint the user’s location using the positioning capabilities of their device.'
    };
    $scope.browser = {
        title: 'Web Browser Support',
        subtitle: 'The select list of browsers that may or may not play nicely with the device location API.',
        btn: 'Support'
    };
    $scope.mobile = {
        title: 'Mobile Browser Support',
        subtitle: 'The mobile browsers that play nicely with the device location API.',
        btn: 'Support'
    };
    $scope.demo = {
        title: 'Demo',
        subtitle: 'This example will work on any browser supporting the device location API and running on a device able to detect its location.',
        btn: 'Code'
    };
    $scope.example = {
        title: 'Device Location Latitude + Longitude',
        subtitle: 'The value reported indicates your current position.',
        btn: 'Get Current Position',
        log: 'Log: ',
        lat: '° Latitude',
        lon: '° Longitude',
        logBtn: 'Clear Log'
    }
});

myApp.controller('setupPageController', function ($scope) {
    $scope.greeting = {
        title: 'Setting Up',
        subtitle: 'There are several ways to get started with sensor-plug.'
    };
    $scope.npm = {
        title: 'NPM (recommended)',
        bash: 'npm install sensor-plug'
    };
    $scope.cdn = {
        title: 'CDN'
    };
    $scope.git = {
        title: 'GIT (recommended)'
    }
});

myApp.controller('aboutPageController', function ($scope) {
    $scope.greeting = {
        title: 'About',
        subtitle: 'Sensor-plug, a micro library that enables built-in mobile device sensors with javascript'
    };
    $scope.about = {
        desc: 'The over all goal of this project was to make sensor data available to novice level developers. A plug and play experience. Other libraries have complex documentation and hundreds of lines of code which can make things difficult when applying to a project. Sensor-plug eliminates the frustration and makes programming a breeze.'
    }
});