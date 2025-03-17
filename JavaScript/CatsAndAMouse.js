// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catAPos = Math.abs(x - z);
    let catBPos = Math.abs(y - z);

    if(catAPos<catBPos) {
        return "Cat A";
    }
    else if(catAPos>catBPos) {
        return "Cat B";
    }
    else {
        return "Mouse C";
    }
}