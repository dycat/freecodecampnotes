
function sum(arr, n){
    return n <= 0 ? 0
                  : sum(arr, n - 1) + arr[n - 1]
}

module.exports = {
    sum
}