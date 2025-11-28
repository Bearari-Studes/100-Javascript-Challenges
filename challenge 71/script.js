function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') return obj
    if(obj instanceof Date) return new Date(obj.getTime())
    if(obj instanceof Array) return obj.map(item => deepClone(item))
    
    const clonedObj = {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key])
        }
    }
    
    return clonedObj
}

const original = {a: 1, b: {c: 2}}
const clone = deepClone(original)
console.log(clone)