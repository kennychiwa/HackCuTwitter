
var TwitterPackage = require('twitter');
var TwitterStream = require('twitter-stream-api'), fs = require('fs');


var tokens {
  consumer_key: 'iuXFMU69WJSaaqAe9yVvr30CF',
  consumer_secret: 'r3uy3ZRh9oXPuBoK7Dfj3zoiZ2nUOTBWUjP4DqtGXIlzzbxbOY',
  token_key: '	194272370-zNHmdL43N6RZJeOtJeH8ZhrursJUQlAqCycHqxbl',
  tokenk_secre: '3j9LEcxAjUq1hLka2QYwSSZStETF7Mr2mBikHYCTTqodV'

}

var Twitter = new TwitterPackage(secret);
var TwitterStr = new TwitterStream(keys, false);
TwitterStr.stream('statuses/filter', {
  track: 'javascript'
});
