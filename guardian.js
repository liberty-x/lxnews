var request = new XMLHttpRequest();
var searchField = document.getElementById('searchBar');
searchField.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    clickSearch();
  }
});

var clicked = false;
function clickSearch() {
  var searchCriteria = document.getElementById('searchBar').value;
  var instaSearch = searchCriteria.replace(/\s/g, '');
  var multipleWordSearch = searchCriteria.replace(/ /g, "%20");
  var url = "http://content.guardianapis.com/search?q=" + multipleWordSearch + "&api-key=444t6y2skjxcdfkdrdragsde";
  var script = document.createElement('script');
  script.src = "https://api.instagram.com/v1/tags/"  + instaSearch + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&callback=displayData";

  document.body.appendChild(script);
  document.getElementById("nav-tab").style.display = "block";

  clicked = true

  request.open("GET", url);
  request.send();
}

function displayData(response){
  var oldInsta = document.getElementsByClassName("instaphotos");
  var arrphotos = [];

  for (index = oldInsta.length - 1; index >= 0; index--) {
      oldInsta[index].parentNode.removeChild(oldInsta[index]);
    }
  // for loop is accessing nested photo urls and pushing into array
  for(var i = 0; i<9;i++){
    arrphotos.push(response['data'][i]['images']['low_resolution']['url']);
  }
  // for loop is creating an 'img' element for each array element,
  // specifying a source and class for them, then appending them to the body
  for(var j = 0 ; j < 9 ; j++){
    var photoDiv = document.createElement("div");
    var oImg=document.createElement("img");
    photoDiv.setAttribute('id', 'photoDest' + [j]);
    photoDiv.setAttribute('class', 'instaphotos');
    document.getElementById("instagram").appendChild(photoDiv);
    oImg.setAttribute('src', arrphotos[j]);
    oImg.setAttribute('class', 'pUnit');
    document.getElementById("photoDest" + [j]).appendChild(oImg);
  }
}


request.onreadystatechange = function (){
  if (request.readyState === 4 && request.status === 200) {
    var JSONfile = JSON.parse(request.responseText).response.results;
    displayResultsFunction(JSONfile);
  }
}

// function for loops and fills in nested divs in the same way as instagram photo divs
function displayResultsFunction(arr) {
  var oldGuard = document.getElementsByClassName("guardArticle");
    for (index = oldGuard.length - 1; index >= 0; index--) {
      oldGuard[index].parentNode.removeChild(oldGuard[index]);
    }
  for(var i = 0 ; i < 5 ; i++){
    var articleDiv = document.createElement("div");
    var oArt=document.createElement("a");
    articleDiv.setAttribute('id', 'articleDest' + [i]);
    articleDiv.setAttribute('class', 'guardArticle');
    document.getElementById("guardian").appendChild(articleDiv);
    oArt.setAttribute('href', arr[i].webUrl);
    oArt.setAttribute('class', 'aUnit');
    oArt.setAttribute('id', 'artUnit' + [i]);
    oArt.innerHTML = arr[i].webTitle;
    oArt.setAttribute('target', "_blank");
    document.getElementById("articleDest" + [i]).appendChild(oArt);
  }
}

//tabbed menu bar
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
