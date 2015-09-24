var request = new XMLHttpRequest()

var clicked = false
function clickSearch() {
  clicked = true;
  var searchCriteria = document.getElementById('searchBar').value;
  var multipleWordSearch = searchCriteria.replace(/ /g, "%20");
  var url = "http://content.guardianapis.com/search?q=" + multipleWordSearch + "&api-key=444t6y2skjxcdfkdrdragsde"
  request.open("GET", url, true);
  request.send();

//  location.href = "file:///Users/ruthuwemedimo/Documents/FAC6/week2/project/lxnews/results.html"//"http://liberty-x.github.io/lxnews/results";
}

request.onreadystatechange = function (){
  if (request.readyState === 4 && request.status === 200) {
    var JSONfile = JSON.parse(request.responseText).response.results;
    displayResultsFunction(JSONfile);
  }
}

function displayResultsFunction(arr) {
  var out = "";
  for (var i = 5; i < 10; i++) {
       out += '<a href="' + arr[i].webUrl + '">' +
       arr[i].webTitle + '</a><br>';
  }
  document.getElementById("guardianResults").innerHTML = out;
}
