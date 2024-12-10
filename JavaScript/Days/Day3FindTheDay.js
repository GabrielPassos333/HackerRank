

function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    const d = new Date(myDate);
    const day = d.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if(d ==-1) {
        return;
    }

    switch (day) {
        case 0:
            console.log(days[0]);
            break;
        case 1:
            console.log(days[1]);
            break;
        case 2:
            console.log(days[2]);
            break;
        case 3:
            console.log(days[3]);
            break;
        case 4:
            console.log(days[4]);
            break;
        case 5:
            console.log(days[5]);
            break;
        case 6:
            console.log(days[6]);
            break;
        default:
            console.log("Invalid day");
            break;
    }
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var dates = _input.split('\n');

    for (var i = 0; i < dates.length - 1; i++) {
        findDay(dates[i]);
    }
});