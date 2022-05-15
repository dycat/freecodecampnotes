function telephoneCheck(str) {
    const regex = /(\d\s)?\(?\d{3}(\)?\s?|-?)\d{3}(\s?|-?)\d{4}/g;
    return regex.test(str);
}

module.exports = {
    telephoneCheck
}