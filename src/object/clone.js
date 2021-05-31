// 浅拷贝
function clone1(target) {
    // 判断类型
    if(typeof target === 'object' && target !== null) {
        // 判断数据是否为数组
        if(Array.isArray(target)) {
            return [...target]
        }else {
            return {...target};
        }
    } else {
        return target;
    }
}
function clone2(target) {
    // 判断类型
    if(typeof target === 'object' && target !== null) {
        // 创建一个容器;
        const result = Array.isArray(target) ? [] : {};
        // 遍历
        for(let key in target) {
            if(target.hasOwnProperty(key)){
                // 将属性放置到result
                result[key] = target[key];
            }
        }
        return result;
    } else {
        return target;
    }
}