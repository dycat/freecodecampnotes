function palindrome(str) {
    let str_pure = str.replace(/[^a-zA-Z0-9]/g, '')
                      .toLowerCase()
    let stack = str_pure.split('');
    
    while(stack.length > 1){
        const first = stack.shift();
        const last = stack.pop();
        if (first != last) {
            return false
        }
    }
    return true;

}
  
module.exports = {
    palindrome
}