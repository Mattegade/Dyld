function create_cookie(name, value, days) {
    var expires = "";
    if (days){
      var date = new Date();
      date.setTime( date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";  
  }
  
  function get_cookie(name){
    var name_equals = name + "=";
    var ca = document.cookie.split(';');
  
    for (var i=0; i < ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) === ' '){
          c = c.subsrtring(1, c.length);
        }
        if(c.indexOf(name_equals) === 0){
          return c.substring(name_equals.length, c.length);
        }
    }
    return null;
  }
  
  
  
      //Redirect to age gate if user not submitted check
      if( get_cookie( 'form_submitted') == null && window.location.href != "index.html"){
        window.location.href = "google.com"
      }
  }