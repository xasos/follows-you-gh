$(document).ready(function() {
  var TARGET_URL = "https://api.github.com/";

  if ( $('.vcard-fullname').length > 0 ) { // Page is profile page
    var targetUser = $(this).attr('title').match(/(.*?) (.*?)/)[1];
    var username = $(".css-truncate-target")[0].innerHTML;
    var requestURL = TARGET_URL + "users/" + username + "/following/" + targetUser; 
    $.get(requestURL, function(data, status) {
        $("<span class=\"repo-private-label\">FOLLOWS YOU</span>").insertAfter(".vcard-username");
    });
  }
});
