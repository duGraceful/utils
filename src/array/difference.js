// arr1中和arr2不同的数据
function difference(arr1, arr2 = []) {
    if(arr1.length === 0){
        return [];
    }
    if(arr1.length === 0) {
        return [...arr1]
    }
    return arr1.filter(item => arr2.includes(item))
}