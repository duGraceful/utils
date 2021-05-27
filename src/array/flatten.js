// 数组扁平化


function flatten1(arr) {
    // 声明空数组
    let result = [];
    // 遍历数组
    arr.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(flatten1(item))
        } else {
            result = result.concat(item)
        }
    })
    return result;
}


function flatten2(arr) {
    // 声明空数组
    let result = [...arr];
    // 遍历数组
    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result)
    }
    return result;
}