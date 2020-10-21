module.exports = function check(str, bracketsConfig) {
  const temp = [];
    const setOfBr = Object.fromEntries(bracketsConfig);

    for (let letter of str.split('')) {
        if (temp[0] === letter) {
            temp.shift();
        } else if (setOfBr[letter]) {
            temp.unshift(setOfBr[letter]);
        } else {
            return false;
        }
    }

    return temp.length === 0;
}
