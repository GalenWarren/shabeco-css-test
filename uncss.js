var uncss = require('uncss');

var files   = [
  "http://ipv4.fiddler/SNL.Services.Application.Common.Service/v1/client?tidy=false&auth=a%21IAAAACSLbOncXvfd32p41peRXOlaVYlWttQNWTqicvdVCRBX8QAAAAGJEAU4EzLPnd0XRXuB-iSYRU8k4TRlu7L6pBfWNlLfBkLgyEkpgfanYtRILzQt-pfvtM0I_oBlpRpHCM_2IGJLyjyRBUkUHrnka-WotZ7dnYp1wpgBiDYJNNm7OQVgXrcK8Xpc0ho-fWeltrbjjZKXg3UCd6VcCy190qs2Rpktyy32YAUeGfrTaFd1l-effWN3QfLK8rugqb6eY7MKGdjLed3kBBFOy54WRYeGuNW_6HHlDzAEbr7tcBOsocZKwyMTQ0uTnpqdrqkVj6wLThnXndK14NzbCu65Vb4ofn7c31sKJ5bE1nEpwy2SPBhEZtE#sample/helloWorld"
];

var options = {
    report: 'min', // optional: include to report savings
    timeout: 60000,
    ignoreSheets: [
        /start\.css$/,
        /custom\.css$/,
        /bootstrap\.css$/
    ]
};

debugger;
uncss(files, options, function (error, output) {
    console.log(output);
});
