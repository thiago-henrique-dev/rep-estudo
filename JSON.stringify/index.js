const obj = {
    key1: 0,
    key2: 1,
    key3: 2,
    obj: {
        a: 111
    }
}
    console.log(JSON.stringify(obj,(key,value) => {
        if (typeof value === 'number'){
            if (value > 0){
                return value
            }
            return undefined
        }
        return value
    }, 4));

    console.log(JSON.stringify(obj, null, 2))