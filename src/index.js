module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = String(n);
    let arr = str.split('').reverse();
    return parseInt(arr.join(''), 10);
}