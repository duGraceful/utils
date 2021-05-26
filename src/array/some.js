// 只要一个符合条件，返回true
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            // 如果一个符合条件，返回true
            return true;
        }
    }
    // 全部不符合条件，返回false
    return false;
}