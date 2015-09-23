// TESTING
  test('Has the search button been clicked', function(assert) {
      var sumbitButton = document.getElementById("searchBtn");
      var clicked = false;
      sumbitButton.addEventListener("click", function(){clicked = true;})

      assert.equal(clicked,true,'message')

  });



// document.getElementById("searchBtn").addEventListener("click", search);
// function search() {
//     location.href = "http://liberty-x.github.io/lxnews/results";
// }
