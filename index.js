(function() {
  TARGET_URL = "https://api.github.com/";
  if ( $('.vcard-fullname').length > 0 ) { // Page is profile page
    var requestURL = TARGET_URL + "users/" + username + "/following/" + targetUser; 
    $.get(requestURL, function(data, status) {
      if (data) { // is not 201
        $("<span class=\"repo-private-label\">FOLLOWS YOU</span>").insertAfter(".vcard-username");
      }
    });
  }
})();
