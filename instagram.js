$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/media/popular?access_token=2208604824.3f13db6.79de78167be449d5bd094b93028ccf04",
  success: function(data) {
    for (var i = 0; i < 9; i++) {
      $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
      }
});

$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/25025320/?access_token=2208604824.3f13db6.79de78167be449d5bd094b93028ccf04",
  success: function(data) {
    $('.name').text(data.data.username);
    $('.tagline').text(data.data.bio);
  }
});