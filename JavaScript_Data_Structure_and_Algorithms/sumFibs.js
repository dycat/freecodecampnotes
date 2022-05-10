
function sumFibs(num) {
    var fib_arr = []

    for (let i = 0; i < num; i++ ){
        if (i == 0 | i == 1) {
            fib_arr[i] = 1
        }else{
            fib_arr[i] = fib_arr[i - 1] + fib_arr[i - 2]
        }
    }
    const fib_single = fib_arr.filter( value =>  (value % 2 != 0) & (value <= num) );
    var sum = 0;
    for (let i = 0; i < fib_single.length; i++){
        sum += fib_single[i];
    }
    return sum

}

module.exports = {
    sumFibs
}