function sumNumbers(){
    let result = 1 + 1;

    if (result == 2){
        sucessCallback()
    } else{
        errorCallback()
    }
}

function sucessCallback(){
    console.log("Yeah! Numbber 2!")
}
function errorCallback(){
    console.log("Oops! Something wrong.")
}
sumNumbers()

let p = new Promise(
    (resolve, reject) =>{
        let a = 1 + 1;
        if(a == 2){
            resolve('Sucess')
        } else {
            reject('Failed')
        }
    }
)
p.then((message) =>{
    console.log('This is in the then' + message)
})
    .catch((err)=>{
        console.log('This in the catch' + err)
    })

const betterDeveloper = 'Thiago'

function whoIsBetterCallback(callback, errorCallback){

    return new Promise ((resolve, reject) =>{

    if(betterDeveloper != 'Thiago' && betterDeveloper != 'Gabriel'){
        reject({
            name: 'This is wrong',
            message: betterDeveloper + "? Really"
        })
    } else 
        resolve({
        name: betterDeveloper,
        message: 'CDFS are the best!'
    })

})
}

whoIsBetterCallback()
.then((result) =>{
    console.log(result.name + '? Yeah' +  result.message)
}).catch((error) => {
    console.log(error.name + ' '  + error.message)
})