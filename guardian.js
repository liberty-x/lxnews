var request = new XMLHttpRequest()
var searchCriteria = document.getElementById('searchBar').value.toString()
var url = "http://content.guardianapis.com/search?q="+searchCriteria+"&api-key=444t6y2skjxcdfkdrdragsde"
//var url = "http://content.guardianapis.com/search?q=food&api-key=444t6y2skjxcdfkdrdragsde"

request.onreadystatechange = function (){
  if (request.readyState === 4 && request.status === 200) {
    var JSONfile = JSON.parse(request.responseText).response.results;
    displayResultsFunction(JSONfile);
  }
}
request.open("GET", url, true);
request.send();

function displayResultsFunction(arr) {
  var out = "";
  for (var i = 5; i < 10; i++) {
       out += '<a href="' + arr[i].webUrl + '">' +
       arr[i].webTitle + '</a><br>';
  }
  document.getElementById("guardianResults").innerHTML = out;
}


document.getElementById("searchBtn").addEventListener("click", clickSearch)
var clicked = false
function clickSearch() {
  clicked = true;
  location.href = "http://liberty-x.github.io/lxnews/results";
}
