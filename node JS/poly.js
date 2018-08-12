var Polynomial = require('polynomial');
const readline = require('readline');

const r2= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var eq=function(){
r2.question('enter your eq:',(answer2)=>{
r2.close();
  console.log( (`${answer2}`));
})
});
}

eq();

/*
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('enter the equation? ', (answer2) => {

  console.log(` valuable feedback: ${answer2}`);

  rl1.close();
});
*/
/*var p=function(x){
return (Polynomial(poly);
}
console.log("enter a polynomial-");
var poly = new Polynomial("x^3-5x+1");
p(poly);*/
