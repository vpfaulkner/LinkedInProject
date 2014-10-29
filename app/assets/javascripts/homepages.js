$(document).on('ready', function () {
  // $ curl https://api.github.com/?access_token=OAUTH-TOKEN

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/vpfaulkner",
    data: {},
    success: function (data) {
      var picture = (data.avatar_url);
      var name = (data.name);
      var login = (data.login);
      var company = (data.company);
      var location = (data.location);
      var email = (data.email);
      var joined_on = (data.created_at);
      var followers = (data.followers);
      var following = (data.following);

      var profile =
        "<li> <img src=" + picture + "> </li>"
        + "<li>" + name + "</li>"
        + "<li>" + login + "</li>"
        + "<li>" + company + "</li>"
        + "<li>" + location + "</li>"
        + "<li>" + email + "</li>"
        + "<li> Joined On " + moment(joined_on).format('MMM DD, YYYY') + "</li>"
        + "<li>" + followers + " Following</li>"
        + "<li>" + following + " Followers</li>";

      $("#contact-information")
        .append(profile);

      $(".username").append(login);
    }
  });

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/vpfaulkner/repos",
    data: {},
    success: function (data) {
      var repos = $.map(data, function (result) {
          return "<li><a href='" + result.svn_url + "'>" + result.name + "</a></li><li>Updated at " + moment(result.updated_at).fromNow() +"</li>";
        });


      $("#repo-information")
        .append(repos);
    }
  });

  $.ajax({
    dataType: "json",
    url: "https://github.com/events",
    data: { },
    success: function (data) {
      console.log(data)
      $("#repo-information")
        .append(data);
    }
  });

});
