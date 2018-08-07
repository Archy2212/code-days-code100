var cube=function(x){   //equation is x^3+x^2+x+1
  return x*x*x;
}
var square=function(x){
  return x*x;
}
var alg=function(x){
  return(cube(x) + square(x)+ x +1);
}
exports.alg=alg;
