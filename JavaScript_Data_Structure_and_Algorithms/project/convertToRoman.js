function convertToRoman(num) {
    const less_than_ten = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    if (num < 10) {
        return less_than_ten[num - 1]
    }
    return num;
}

module.exports = {
    convertToRoman
}