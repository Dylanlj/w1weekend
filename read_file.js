var fileToRead = process.argv.slice(2).toString()

var fs = require('fs')
var buf = new Buffer(1024)

fs.open(fileToRead, 'r' , function (err, fd){

  if(err){
    return console.error(err);
  }
  console.log("file Opened")
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if(err){
      console.log(err);
    }
    console.log(buf.toString())
  })
})