
//hiding all elements on page except search bar for clean look
document.getElementById("nav-tab").style.display = "none";


var request = new XMLHttpRequest()
// variable declared to test if search button has been clicked
var clicked = false
function clickSearch() {
  clicked = true;
  // document.getElementById("instagram").style.display = "block";
  // document.getElementById("guardian").style.display = "block";
  document.getElementById("nav-tab").style.display = "block";
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


//tabbed items on index page
(function(){
       function onTabClick(event){
         
         var actives = document.querySelectorAll('.active');

         // deactivate existing active tab and panel
         for (var i=0; i < actives.length; i++){
           actives[i].className = actives[i].className.replace('active', '');
         }

         // activate new tab and panel
         event.target.parentElement.className += ' active';
         document.getElementById(event.target.href.split('#')[1]).className += ' active';
       }


       var el = document.getElementById('nav-tab');

       el.addEventListener('click', onTabClick, false);
     })();
