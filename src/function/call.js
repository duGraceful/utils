function call(Fn, obj, ...args) {
    // 判断
    if(obj === undefined || obj === null) {
        // obj指向全局对象
        obj = globalThis;
    }

    // 为obj添加临时的方法
    obj.temp = Fn;
    // 调用temp方法
    let result = obj.temp(...args);
    // 删除temp方法
    delete obj.temp;
    // 返回执行结果
    return result;
}