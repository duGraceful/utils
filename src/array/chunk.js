/**
 * 数组分组
 * @param {Array} arr 
 * @param {Number} size 
 */
function chunk(arr, size = 1) {
    if(arr.length === 0){
        return [];
    }
    let result = [];
    let tmp = []


    // 遍历
    arr.forEach(item => {
        // 判断tmp的长度是否为0
        if(tmp.length === 0){
            // 将元素压入临时数组tmp中
            result.push(tmp)
        }
        // 将元素压入临时数组tmp中
        tmp.push(item);
        if(tmp.length === size){
            tmp = []
        }
    })
    return result;
}