function mesclarObjetos(...objetos) {
    return objetos.reduce((acc, obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    acc[key] = mesclarObjetos(acc[key] || {}, obj[key])
                } else {
                    acc[key] = obj[key]
                }
            }
        }
        return acc
    }, {})
}

console.log(mesclarObjetos({a: 1}, {b: 2}, {a: 3, c: 4}))