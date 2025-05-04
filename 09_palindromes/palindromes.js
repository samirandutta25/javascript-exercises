const palindromes = function (str) {
    let reverseStr = str.toLowerCase().split('').filter( ele => ele >='a' && ele <= 'z' || ele >='1' && ele <= '9').reverse().join('');
    let newStr = str.toLowerCase().split('').filter( ele => ele >='a' && ele <= 'z' || ele >='1' && ele <= '9').join('');
    return reverseStr === newStr;
};
console.log(palindromes('Race car!'));
// Do not edit below this line
module.exports = palindromes;
