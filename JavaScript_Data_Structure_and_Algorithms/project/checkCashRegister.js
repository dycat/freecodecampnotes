function checkCashRegister(price, cash, cid){
    let change_target = cash - price
    let total_change_of_draw = 0
    let change_arr = []
    let current_change = 0
    
    for (let i = 0; i < cid.length; i++ ){
        if (cid[i][1] <  change_target) {
            change_arr.push(cid[i]);
            current_change += cid[i][i]
        }
        total_change_of_draw += cid[i][1]
    }
    if (change_target == total_change_of_draw) {
        return {status: "CLOSED", change: cid}
    }
    if (change_target > total_change_of_draw) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: change_arr}
}

module.exports = {
    checkCashRegister
}