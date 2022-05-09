function translatePigLatin(str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0))) {
        return str + 'way'
    }else{
        let match = str.match(/[aeiou]/gi);
        if (match === null) {
            return str + 'ay'
        }

        var vowel_index 
        var fuyin = ''
        
        for (let i = 0; i < str.length; i++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(str[i])){
                vowel_index = i
                break
            }else{
                fuyin += str[i]
            }
        }
        return str.slice(vowel_index) + fuyin + 'ay'
    }
}

module.exports = {
    translatePigLatin
}