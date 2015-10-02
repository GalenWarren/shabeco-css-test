var webpage = require('webpage');
debugger;

var page = webpage();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open("http://ipv4.fiddler/SNL.Services.Application.Common.Service/v1/client?tidy=false&auth=a%21IAAAACSLbOncXvfd32p41peRXOlaVYlWttQNWTqicvdVCRBX8QAAAAGJEAU4EzLPnd0XRXuB-iSYRU8k4TRlu7L6pBfWNlLfBkLgyEkpgfanYtRILzQt-pfvtM0I_oBlpRpHCM_2IGJLyjyRBUkUHrnka-WotZ7dnYp1wpgBiDYJNNm7OQVgXrcK8Xpc0ho-fWeltrbjjZKXg3UCd6VcCy190qs2Rpktyy32YAUeGfrTaFd1l-effWN3QfLK8rugqb6eY7MKGdjLed3kBBFOy54WRYeGuNW_6HHlDzAEbr7tcBOsocZKwyMTQ0uTnpqdrqkVj6wLThnXndK14NzbCu65Vb4ofn7c31sKJ5bE1nEpwy2SPBhEZtE#sample/helloWorld", function(status) {

  var x = status;

});
