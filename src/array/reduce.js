function reduce(arr, callback, initValue) {
    // 声明变量
    let result = initValue;
    // 执行回调
    for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i])
    }
    // 返回结果
    return result;
}