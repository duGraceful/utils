const PubSub = {
    // 订阅唯一id
    id: 1,
    // 频道与回调存储器
    callbcaks: {
        pay: {

        }
    }
}

// 订阅频道
PubSub.subscribe = function(channel, callbcak) {
    // 创建唯一编号
    let token = "token_" + this.id++;
    // token_1
    // 判断 callbacks是否存存在channel
    if(this.callbcaks[channel]) {
        this.callbcaks[channel][token] = callbcak;
    } else {
        this.callbcaks[channel] = {
            [token]: callbcak
        }
    }
    
}

// 发布消息
PubSub.publish = function(channel, data) {
    
}
