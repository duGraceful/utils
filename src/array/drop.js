// drop得到当前数组过滤掉左边count个后剩余元素组成的数组
// 不改变当前数组，count默认是1
function drop(arr, size) {
    // 过滤原数组，产生新数组
    return arr.filter((item, index) => index >= size);

}
// dropRight得到当前数组过滤掉右边count个后剩余元素组成的数组
// 不改变当前数组，count默认是1
function dropRight(arr, size) {
    // 过滤原数组，产生新数组
    return arr.filter((item, index) => index < arr.length - size);

}