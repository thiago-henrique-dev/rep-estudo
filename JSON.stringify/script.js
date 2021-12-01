const objs = [
    {
        nome: "Thiago",
        idade: 21,
        esta_trabalhando: true,
        detalhes_profissao:{
                profissao: "Programador",
                empresa: "Empresa X"
        },
        hobbies: ["Programar","Correr","Ler"],
    }, 
    {
        nome: "Joao",
        idade: 15,
        esta_trabalhando: false,
        detalhes_profissao:{
                profissao: null,
                empresa: null,
        },
        hobbies: ["Jogat","Acadmeia"]
    }
    ] 
    console.log(objs)
    //JSON
    //converter objeto para json
    const jsonData = JSON.stringify(objs)
    console.log(jsonData)
    console.log(typeof jsonData)

    //converter json para objetos
    const objData = JSON.parse(jsonData);
    console.log(jsonData)
    console.log(typeof jsonData)

    objData.map((pessoa) =>{
        console.log(pessoa.nome)
    });