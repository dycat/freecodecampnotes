/** 
 example: checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    
    First calculate the target_charge = 100 - 3.26 = 96.74
    遍历cid,所找硬币应当单位值小于target_charge
    (1) Twenty 符合条件，change 60. target_charge -= 60 (36.74);
    (2) Ten 符合条件，change 20. target_charge -= 20 (16.74);
    (3) Five 符合条件, change 15. target_charge -= 15 (1.74);
    (4) one, change 1. target_charge -= 1 (0.74);
    (5) Quarter, change 0.5. target_charge -= 0.5 (0.24;)
    (6) Dime, change 0.2. target_charge -= 0.2 (0.04)
    (7) penny, change 0.04. target_change -= 0.04 (0);
    end

*/
function checkCashRegister(price, cash, cid){
    let change_target = cash - price
    let total_change_of_draw = 0
    let change_arr = []
    let coin_unit = get_coin_map()
    let cid_reverse = cid.reverse()
    console.log('====start cal price: %d, cash: %d ======', price, cash)
    
    for (let i = 0; i < cid_reverse.length; i++ ){
        let current_unit = coin_unit.get(cid_reverse[i][0]) 
        let change_avaliable = cid_reverse[i][1];
        let part_change = 0;
        if (current_unit < change_target){
            while (current_unit <= change_target & change_target > 0 & change_avaliable > 0) {
                part_change += current_unit;
                change_avaliable -= current_unit;
                change_target -= current_unit;
                change_target = change_target.toFixed(2)
            }
            console.log('part change: %d, target change: %d', part_change, change_target)
            change_arr.push([cid_reverse[i][0], part_change])
        }
        total_change_of_draw += cid_reverse[i][1]
        
    }
    if (change_target == total_change_of_draw) {
        return {status: "CLOSED", change: cid}
    }
    if (change_target > total_change_of_draw) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    const change_obj = {status: "OPEN", change: change_arr}
    return change_obj
}

function get_coin_map(){
    let map = new Map()
    map.set('ONE HUNDRED', 100)
    map.set('TWENTY', 20)
    map.set('TEN', 10)
    map.set('FIVE', 5)
    map.set('ONE', 1)
    map.set('QUARTER', 0.25)
    map.set('DIME', 0.1)
    map.set('NICKEL', 0.05)
    map.set('PENNY', 0.01)
    return map
}

module.exports = {
    checkCashRegister
}