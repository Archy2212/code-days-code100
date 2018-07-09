var stdin = process.openStdin();
console.log("enter number between 1-7");
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()

    switch(parseInt(d.toString()))
    {
    case 1:
    console.log('Today is monday');
    break;

    case 2:
    console.log('Today is tuesday');
    break;

    case 3:
    console.log('Today is wednesday');
    break;

    case 4:
    console.log('Today is thusday');
    break;

    case 5:
    console.log('Today is friday');
    break;

    case 6:
    console.log('Today is saturday');
    break;


    case 7:
    console.log('Today is sunday');
    break;


    default:
    console.log('you entered wrong input');
    break;
    }
    process.stdin.destroy();
  });
