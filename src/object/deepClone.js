

// 深拷贝 
// JSON 不能克隆方法，不能循环引用
function deepClone1(target) {
    // 通过数据创建JSON的字符串
    let str = JSON.stringify(target);
    // 将JSON字符串创建为JS数据
    let data = JSON.parse(str);

    return data;
}

// 递归
function deepClone2(target) {
    // 检测数据类型

    if(typeof target === 'object' && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历
        for(let key in target) {
            if(target.hasOwnProperty(key)){
                result[key] = deepClone2(target[key])
            }
        }
        return result;
    } else {
        return target;
    }
}

// 加强版
function deepClone3(target, map = new Map()) {
    // 检测数据类型

    if(typeof target === 'object' && target !== null) {
        // 克隆之前，进行判断，数据之前是否克隆过
        let cache = map.get(target);
        if(cache) {
            return cache;
        }
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 将新的结果存到容器中
        map.set(target, result)
        // 遍历
        for(let key in target) {
            if(target.hasOwnProperty(key)){
                result[key] = deepClone2(target[key], map)
            }
        }
        return result;
    } else {
        return target;
    }
}

// 加强版
function deepClone4(target, map = new Map()) {
    // 检测数据类型

    if(typeof target === 'object' && target !== null) {
        // 克隆之前，进行判断，数据之前是否克隆过
        let cache = map.get(target);
        if(cache) {
            return cache;
        }
        // 创建一个容器
        const isArray = Array.isArray(target);
        const result = isArray? [] : {};
        // 将新的结果存到容器中
        map.set(target, result)
        // 遍历
        // 如果目标数据为数组
        if(isArray) {
            target.forEach((item, index) => {
                result[item] = deepClone4(item, map)
            })
        } else {
            // 如果是对象
            Object.keys(target).forEach(key => {
                result[key] = deepClone4(target[key], map)
            })
        }
        return result;
    } else {
        return target;
    }
}