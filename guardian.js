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
  // create script element in the HTML page
  var script = document.createElement('script');
  // assing src property with callback name
  script.src = "https://api.instagram.com/v1/tags/"  + searchCriteria + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&callback=displayData";
  // insert script to document and load content
  document.body.appendChild(script);
}

function displayData(response){
  var element = document.getElementsByClassName("instaphotos");
    for (index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }
  // creating array to push urls into
  var arrphotos = [];
  // for loop is accessing nested photo urls and pushing into array
  for(var i = 0; i<9;i++){
    arrphotos.push(response['data'][i]['images']['low_resolution']['url']);
  }
  // for loop is creating an 'img' element for each array element,
  // specifying a source and class for them, then appending them to the body
  for(var j = 0 ; j < 9 ; j++){
    var oImg=document.createElement("img");
    oImg.setAttribute('src', arrphotos[j]);
    oImg.setAttribute('class', 'instaphotos');
    document.body.appendChild(oImg);
  }
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
