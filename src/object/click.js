function addEventListener(el, type, fn, selector) {
    // 判断el的类型
    if (typeof el === 'string') {
        el = document.querySelector(el);
    }

    // 事件绑定
    // 如果没有传递子元素的选择器， 则给el绑定事件
    if(!selector) {
        el.addEventListener(type, fn)
    }else {
        el.addEventListener(type, function(e) {
            // 获取点击目标事件源
            const target = e.target;
            // 判断选择器与目标元素是否相符
            if(targt.matchs(selector)){
                // 符合调用回调
                fn.call();
            }
        })
    }
}