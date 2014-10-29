$(document).on('ready', function () {

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
        + "<li>" + joined_on + "</li>"
        + "<li>" + followers + "</li>"
        + "<li>" + following + "</li>";


      $("#contact-information")
        .append(profile);
    }

  });

});
