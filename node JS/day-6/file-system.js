var fs =require('fs');
//Synchronous method

/*var read = fs.readFileSync('readMe.txt','utf8');   //reading text from file
console.log(read);*/

/*var read = fs.readFileSync('readMe.txt','utf8');
fs.writeFileSync('writeMe.txt', read); */               //reading and writting

//Asynchronous method

/*fs.readFile('readMe.txt', 'utf8', function(err,data){   //reading text from file
  console.log(data);
})*/

fs.readFile('readMe.txt', 'utf8', function(err,data){   //reading and writting
  fs.writeFile('write.txt',data)
});
