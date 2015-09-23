
  var request = new XMLHttpRequest()
  // request.onreadystatechange = function() {
  //     if(request.readyState == 4) {
  //         console.log(request);
  //         document.getElementById('response').innerHTML = request.responseText;
  //     };
  // };
  request.open("GET", "http://content.guardianapis.com/search?q=football&api-key=444t6y2skjxcdfkdrdragsde", true);
  request.send();

console.log(request);
