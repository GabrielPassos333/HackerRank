

function printObjectProperty(obj) {
    //Write your code here
    console.log("{ type: '" + obj.type + "', model: '" + obj.model + "', color: '" + obj.color + "' }");

}

// The below code is to show how to create an Object.
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var obj = _input.split(' ');
    var myObject = new Object;

    // Fill up the question marks
    myObject.type = obj[0];
    myObject.model = obj[1];
    myObject.color = obj[2];

    printObjectProperty(myObject);
});