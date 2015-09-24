// TESTING
  test('Has the search button been clicked', function(assert) {
      var done = assert.async();
      setTimeout (function(){
        var sumbitButton = document.getElementById("searchBtn");
        sumbitButton.addEventListener("click", function(){
          clicked = true;
        });
      assert.equal(clicked,true,'The search button has been clicked!')
      done();
    },5000) ;
  });
