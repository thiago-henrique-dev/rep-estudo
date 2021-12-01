let name = document.querySelector("#name")
let job = document.querySelector("#job")
let form = document.querySelector("#form")


//acessar evento especifico do formulario..
form.addEventListener("submit", function(event){
    event.preventDefault();//Formulario não  vai ser mais atualizado..
    
    let dados = {name: name.value, job: job.value}
    console.log(dados)

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function(response){
        return response.json()
})
.then(function(response){   
    alert("ok cadastro com sucesso")
})
})
