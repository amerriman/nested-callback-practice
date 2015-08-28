var fs = require ('fs');

//console.log('test');

fs.readFile('files/start.txt', 'utf8', function(err, data){
  var sentence = '';
  var dataSplit = data.split('\n');
  sentence += dataSplit[0] + ' ';
  fs.readFile('files/next.txt','utf8', function(err, data){
    var dataSplit = data.split('\n');
    sentence += dataSplit[0] + ' ';
    fs.readFile('files/again.txt','utf8', function(err, data){
      var dataSplit = data.split('\n');
      sentence += dataSplit[0] + ' ';
      console.log(sentence);
    });
  });
  //if console.log here, it will only log the first part.
});

//just run node and eventloop.js in the console and it should console.log this


