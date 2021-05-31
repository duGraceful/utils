// 反转字符串
function reverseString(str) {
    // 将字符串转为数组
    let arr = [...str];
    // 反转数组
    arr.reverse();
    return arr.join('');
}


// 判断是否是回文
function pailndrome(str) {
    return reverseString(str) === str;
}


function truncate(str, size) {
    return str.slice(0, size);
}