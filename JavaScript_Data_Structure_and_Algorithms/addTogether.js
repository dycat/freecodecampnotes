function addTogether() {
    const [first, second] = arguments
    
    if (!Number.isInteger(first)){
        return undefined
    }
    
    if (second == undefined){
        return (second) => addTogether(first, second) 
    }

    if (!Number.isInteger(second)){
        return undefined
    }
    return first + second
    
}

module.exports = {
    addTogether
}