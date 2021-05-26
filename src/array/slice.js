/**
 * 数组切片
 * @param {Array} arr 
 * @param {number} startIndex 
 * @param {number} endIndex 
 */
function slice(arr, startIndex, endIndex) {
    // 声明空数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(i >= startIndex && i < endIndex) {
            result.push(arr[i])
        }
    }

    return result;
}