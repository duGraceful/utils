function findIndex(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
       if(callback(arr[i], i)) {
            // 返回符合条件的下标
           return i;
       }
    }
    // 如果没有遇到符合条件的
    return -1;
}