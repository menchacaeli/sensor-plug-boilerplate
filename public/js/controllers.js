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
    $scope.code = {
        title: 'Code Example'
    };
    $scope.example = {
        title: 'Device Orientation Demo',
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
    $scope.code = {
        title: 'Code Example'
    };
    $scope.example = {
        title: 'Device Acceleration Demo',
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
    $scope.code = {
        title: 'Code Example'
    };
    $scope.example = {
        title: 'Device Geolocation Demo',
        btn: 'Get Current Position',
        permissionBtn: 'Ask Permission',
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
    };
    $scope.socket = {
        title: 'Socket.io',
        desc: 'Sensor-plug currently depends on Socket.io and is included in the package.json file, in order to have this available you must install the dependency. Socket.io is a JavaScript library for real-time applications. Sensor-plug uses Socket.io to pass sensor data between the client-side and server-side in real-time. Refer to the chat room application by Socket.io for a basic setup.'
    }
});

myApp.controller('aboutPageController', function ($scope) {
    $scope.greeting = {
        title: 'About',
        subtitle: 'Sensor-plug, a micro library that enables built-in mobile device sensors with javascript'
    };
    $scope.about = {
        title: 'What is Sensor-plug?',
        desc: 'The over all goal of this project was to make sensor data available to novice level developers. A plug and play experience. Other libraries have complex documentation and hundreds of lines of code which can make things difficult when applying to a project. Sensor-plug eliminates the frustration and makes programming a breeze.'
    };
    $scope.future = {
        title: 'The Future',
        desc: 'The following sensors will be included with sensor-plug in the near future.',
        prox: '- Proximity',
        light: '- Ambient Light',
        media: '- Media Capture'
    }
});

myApp.controller('webGlPageController', function ($scope) {
    $scope.greeting = {
        title: 'WebGL',
        subtitle: 'In this example I use sensor-plug device orientation with three.js.'
    };
    $scope.three = {
        title: 'Three.js',
        desc: 'Three.js is a cross-browser JavaScript library and Application Programming Interface (API) used to create and display animated 3D computer graphics in a web browser. Three.js is an open source library with great documentation. Let\'s get started.',
        gettingStarted: 'Getting started',
        gettingStartedDesc: 'Before you can use three.js, you need somewhere to display it. Save the following HTML to a file on your computer, along with a copy of three.js in the js/ directory, and open it in your browser.',
        sceneTitle: 'Creating a scene',
        sceneDesc: 'To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.'
    };
    $scope.example = {
        title: 'Three.js + Sensor-plug Device Orientation'
    }

});