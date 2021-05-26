function concat(arr, ...args) {
    const result = [...arr]
    // 遍历数组
    args.forEach(item => {
        // 判断item是否为数组
        if(Array.isArray(item)){
            result.push(...item)
        } else {
            result.push(item)
        }
    })

    return result;
}