// 删除原数组中与value相同的元素，返回所有删除的数组
// 原数组发生变化
function pull(arr, ...args) {
    // 声明空数组，保存删掉的元素
    const result = [];

    // 遍历
    for (let i = 0; i < arr.length; i++) {

        // 判断当前元素是否存在于args数组中
        if(args.includes(arr[i])){
            // 先存再删
            // 将当前元素存到result
            result.push(arr[i])
            // 删除当前的元素
            arr.splice(i, 1);
            // 下标自减
            i--;
        }
    }

    return result;
    
}

function pullAll(arr, valus) {
    return pull(arr, ...valus)
}