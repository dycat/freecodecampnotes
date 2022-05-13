function steamrollArray(arr) {
    let stack = [...arr]
    let result_arr = []
    while (stack.length){
        const item = stack.pop()
        if (Array.isArray(item)) {
            stack.push(...item)
        }else{
            result_arr.push(item)
        }
    }
    return result_arr.reverse()
}


module.exports = {
    steamrollArray
}