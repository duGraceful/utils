

function mergeObject(objs) {
    // 声明一个空对象
    const result = {};
    // 遍历所有的参数对象
    objs.forEach(obj => {
        // 拿到obj所有的属性
        Object.keys(obj).forEach(key => {
            // 检测result中是否存在key属性
            if(result.hasOwnproperty(key)){
                result[key] = [].concat(result[key], obj[key]);
            } else {
                // 如果没有直接写入
                result[key] = obj[key]
            }
        })
    })

    return result;
}