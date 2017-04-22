
var TwitterStream = require('twitter-stream-api'), fs = require('fs');
var mongo = require('mongodb');
//var oAuth = rquire('oauth').OAuth

var mdbServer = mongo.Server('localhost', 27017, {'auto_reconnect' : true});
var mdb = mongo.Db('streaming_db', mdbServer)

var tokens =  {
  consumer_key: 'iuXFMU69WJSaaqAe9yVvr30CF',
  consumer_secret: 'r3uy3ZRh9oXPuBoK7Dfj3zoiZ2nUOTBWUjP4DqtGXIlzzbxbOY',
  token_key: '	194272370-zNHmdL43N6RZJeOtJeH8ZhrursJUQlAqCycHqxbl',
  tokenk_secre: '3j9LEcxAjUq1hLka2QYwSSZStETF7Mr2mBikHYCTTqodV'

}


mdb.open(function (err, db)) {
  if (err) {console.log("Cannot connect")}
  else {console.log('Connected to streaming_db@localhost:27017');}
  db.createCollection('tweets', function(err, collection)){

  }
}

var Twitter = new TwitterStream(tokens, false);
TwitterStr.stream('statuses/filter', {
  track: 'Kenny is a bitch'
});

var Twitter = new TwitterStream(tokens, [objectMode, options]);
