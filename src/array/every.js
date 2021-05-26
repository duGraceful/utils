// 全部符合条件，返回true
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        // 如果不符合条件，返回false
        if(!callback(array[i], i)) {
            return false;
        }
    }
    // 全部符合条件，返回true
    return true;
}