
function rot13(str){
    let res = '';
    const map = getMap();
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/g)) {
            res += map.get(str[i]) 
        }else{
            res += str[i]
        }
        
    }
    return res

}

function getMap(letter) {
    let map = new Map([
        ['A', 'N'],
        ['B', 'O'],
        ['C', 'P'],
        ['D', 'Q'],
        ['E', 'R'],
        ['F', 'S'],
        ['G', 'T'],
        ['H', 'U'],
        ['I', 'V'],
        ['J', 'W'],
        ['K', 'X'],
        ['L', 'Y'],
        ['M', 'Z'],
        ['N', 'A'],
        ['O', 'B'],
        ['P', 'C'],
        ['Q', 'D'],
        ['R', 'E'],
        ['S', 'F'],
        ['T', 'G'],
        ['U', 'H'],
        ['V', 'I'],
        ['W', 'J'],
        ['X', 'K'],
        ['Y', 'L'],
        ['Z', 'M']
    ]);

    return map;
}

module.exports = {
    rot13
}