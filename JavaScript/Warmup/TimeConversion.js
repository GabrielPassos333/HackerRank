/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let time = s.slice(0, 8);
    let period = s.slice(8, 10);
    let hour = s.slice(0, 2);
    if (period === 'AM') {
        if (hour === '12') {
            return '00' + time.slice(2);
        } else {
            return time;
        }
    } else {
        if (hour !== '12') {
            return (parseInt(hour) + 12) + time.slice(2);
        } else {
            return time;
        }
    }
    // let time = timeConversion('12:45:54PM');
    // console.log(time);
}

