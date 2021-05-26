function bind(Fn, obj, ...args) {
    // 返回一个新的函数
    return function(...args2) {
        // 执行call函数
        // 前面的参数参加运算
        return call(Fn, obj, ...args, ...args2);
    };
}