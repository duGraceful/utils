//   数组去重
// 1、 利用forEach() 和 indexOf(), 本质双重去重，效率差
// 2、 利用forEach() 和 对象容器, 只需一遍遍历，效率高些
// 3、 利用ES6语法，from + Set 或者 ... + Set, 编码简洁

function unique1(arr) {
    // 声明一个空数组
    const result = [];
    arr.forEach(element => {
        // 检测result是否包含某个数组
       if(result.indexOf(element) === -1) {
           result.push(element)
       }
    });

    return result;
}
function unique2(arr) {
    // 声明一个空数组
    const result = [];
    // 声明空对象
    const obj = {}
    arr.forEach(item => {
        if(obj[item] === undefined){
            // 将item作为下标存储在obj中
            obj[item] = true;
            result.push(item)
        }
    });

    return Object.keys(result);
}
function unique3(arr) {
    // 先将数组转成集合
    return [...new Set(arr)];
}