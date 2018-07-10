var fs=require("fs");
var fileName=process.argv[2];
fs.readFile(fileName, function(err,contents){
  console.log(contents.toString());
});
