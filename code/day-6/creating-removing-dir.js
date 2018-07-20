var fs = require('fs');

//Synchronous method

//fs.mkdirSync('coding');        //creates directory
//fs.rmdirSync('coding');        //remove directory

//Asynchronous method

/*fs.mkdir('coding',function(){                                 //creates dir and read write file
  fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('./coding/wr.txt',data);
  });
});*/

fs.unlink('./coding/wr.txt', function(){                        //removes file then dir
  fs.rmdir('coding');
});
