var fs=require("fs");
var fileName=process.argv[2];
var newContents=process.argv[3];
fs.writeFile(fileName, newContents,function(err){
  if(err)
  console.log("error");
  else
  console.log("success.");
});
