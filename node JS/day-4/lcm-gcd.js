
var firstNumber=process.argv[2];
var secondNumber=process.argv[3];
var max=(firstNumber>secondNumber)?firstNumber:secondNumber;
while(1){
  if(max%firstNumber==0 &&max%secondNumber==0){
    console.log("lcm is "+ max);
    break;
  }
  ++max;
}
var gcd= (firstNumber*secondNumber)/max;
console.log("gcd is " +gcd);
