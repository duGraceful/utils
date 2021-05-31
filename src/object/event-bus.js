const eventBus = {
    // 保存类型和回调的容器
    callbacks: {
        login: []
    }
};

// 绑定事件
eventBus.on =  function (type, callback) {
    if(this.callbacks[type]){
        // 如果callbacks属性中存在该类型事件
        this.callbacks[type].push(callback);

    } else {
        // 如果callbacks属性中不存在该类型事件
        this.callbacks[type] = [callback];
    }
}


// 触发事件
eventBus.emit = function (type, data) {
    // 
    if(this.callbacks[type] && this.callbacks[type].length > 0){
        this.callbacks[type].forEach(callback => {
            callback(data)
        })
    }
}

eventBus.off = function (eventName) {
    if(eventName) {
        // 只删除eventName对应的回调
        delete this.callbacks[eventName];
    } else {
        this.callbacks = {};
    }
}