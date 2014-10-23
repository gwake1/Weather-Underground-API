
var url = 'http://api.wunderground.com/api/866a15318a636006/forecast10day/q/';

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){
  console.log(data);
}

document.addEventListener("DOMContentLoaded", function(){
  getJSONP(url, "myAwesomeFunction")
})
