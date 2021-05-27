/**
 * 数组切片
 * @param {Array} arr 
 * @param {number} begin 
 * @param {number} end 
 */
function slice(arr, begin, end) {
    // 若数组长度=0
    if(arr.length === 0){
        return [];
    }

    // 判断起始位置
    begin = begin || 0;
    if(begin >= arr.length){
        return [];
    }


    // 判断结束位置
    end = end || arr.length;
    if(end < begin) {
        end = arr.length;
    }

    // 声明空数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(i >= begin && i < end) {
            result.push(arr[i])
        }
    }

    return result;
}