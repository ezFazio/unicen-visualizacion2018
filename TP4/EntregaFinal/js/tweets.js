function parseLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,'<a href="$1" target="_blank">$1</a>');
  }

  // function for parsing @username
  function parseUsers(text) {
    var exp = /@(\w+)/ig;
    return text.replace(exp,'<a href="https://twitter.com/$1" target="_blank">@$1</a>');
  }

  // function for parsing #hashtags
  function parseHashtags(text) {
    var exp = /#(\w+)/ig;
    return text.replace(exp,'<a href="https://twitter.com/search?q=%23runescape$1" target="_blank">#$1</a>');
  }

  // create a new codebird
  var cb = new Codebird;

  // YOU MUST SET THESE KEYS!
      // login in to twitter
  // create a new app here: https://dev.twitter.com/apps/new
      // create token & copy from https://apps.twitter.com/app/<your app id>/keys

  cb.setConsumerKey('Tes7uca2M8ogoxzMN5ztsuxyN', 'l1XUR23722nJU4K1lVXnyLEvoYMkKyKRl1p7fTNHwkXEx1CUim');
  cb.setToken('73839945-CvCkrOJUmrp21pxkr7D2s4RY5fxIZeEOSWaGHQU9d', '0B1c6Z2hN0Jl58KYGf37INaxcqa8F5u25sc8Hn4Y2VFs9');

  // returns the user's timline
  cb.__call(
    'statuses_userTimeline',
    {},
    function (reply) {
      var i = 0;
      for (var key in reply) {
        i++;
        // limit to 5
        if (i <= 5 && reply[key].text) {
          // add these to the #tweets ul
          $('#tweets').append('<li class="list-group-item">'+ parseHashtags(reply[key].text) +'</li>');
        };
      }
    }
  );
