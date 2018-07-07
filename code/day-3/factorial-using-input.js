var prompt = require('prompt') , arr=[];
function getAnother() {
    prompt.get('number', function(err, result) {
        if (err) done();
        else {
            arr.push(parseInt(result.number, 9))
            var fact=1;
            for(var x=1;x<=result.number;x++)
            {
             fact=  fact*x;
            }
console.log(fact);
        }
    })
}

function done() {
    console.log(arr);
}


prompt.start();
getAnother();
