// Let's initialize an array consisting the names of family members
let family = ["archy","suryansh","anshika","kartik","navni"];
// print all the values of array
console.log(family);

// print value from a specific index , from index one
console.log(family[2]);

//print length of array
console.log(family.length);

//print last element in array
console.log(family[family.length-1]);

//print all the values of array one by one
family.forEach(function(x){
    console.log(x);
});
