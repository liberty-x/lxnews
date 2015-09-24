var request = new XMLHttpRequest()
// variable declared to test if search button has been clicked
var clicked = false
function clickSearch() {
  clicked = true;
  var searchCriteria = document.getElementById('searchBar').value;
  // this replaces spaces with the encoding %20 for multiple words (this signifies &s)
  var multipleWordSearch = searchCriteria.replace(/ /g, "%20");
  var url = "http://content.guardianapis.com/search?q=" + multipleWordSearch + "&api-key=444t6y2skjxcdfkdrdragsde"
  request.open("GET", url);
  request.send();
}

request.onreadystatechange = function (){
  // Finding out if the request and response is ready
  if (request.readyState === 4 && request.status === 200) {
  // JSONifies HTTP response
    var JSONfile = JSON.parse(request.responseText).response.results;
    displayResultsFunction(JSONfile);
  }
}

// runs through JSON array and creates links for each one on index.html
function displayResultsFunction(arr) {
  var out = "";
  for (var i = 0; i < 9; i++) {
       out += '<a href="' + arr[i].webUrl + '">' +
       arr[i].webTitle + '</a><br>';
  }
  document.getElementById("guardianResults").innerHTML = out;
}
