function filter(arr, callbacl) {
    // 声明空数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        // 返回为true，push到result
        if(callbacl(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}