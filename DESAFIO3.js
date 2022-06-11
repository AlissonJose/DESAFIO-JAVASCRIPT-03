const read = require("readline-sync")

//RF1 - O sistema deve conter um loop que solicite a ação do usuário sobre os.
// neessário criar uma função com os cadastro: dados e armazenar no json.

function cadastrar(nome, idade, sexo, endereço, lista){
    const usuario = {
        Nome: nome,
        Idade: idade,
        Sexo: sexo,
        Endereco: endereço
    }

//nessa parte de cadastro o armazenamento com o json na lista de usuarios;
lista.push(usuario)
}
//criar uma função para armazer nomes dos usuários: utilizar o array 
function armazenar(array, n){
    array.push(n)
}
//função "consultar" o usuário pelo índice: recebe a lista com os nomes e numeros de indices dados pelo usuário.
function consultar(lista, id){
    console.log("O ID desse usuário é:", id, lista[id])
}

//função para "listar" recebe os dados do usuário em lista
function listar(lista){
    for(i = 0; i < lista.length; i++){
console.log('ID:', i, 'Nome:', lista[i]["Nome"], 'Idade:', lista[i]["Idade"], 'Sexo:', lista[i]["Sexo"], 'Endereço:', lista[i]["Endereco"])
    }
}

let nomes_usuarios = []
let lista_usuarios = []
    var escolha = ""
    while(escolha !="0"){
        escolha = read.question("Ola, escolha uma das opcoes: \n0 - Para sair do sistema \n1 - Para cadastrar um usuario \n2 - Para consultar um usuario pelo ID \n3 - Para listar todos os usuarios cadastrados. \n")
    if(escolha == "1"){
        console.log("Precisamos coletar alguma informações para o seu cadastro no sistema:")
        const nome = read.question("Nome: ")
        const idade = parseInt(read.question("Idade: "))
        const sexo = read.question("Sexo: ")
console.log("Por fim, informe seu endereço:")
        const end = {

        Rua: read.question("Rua: "),
        Número: parseInt(read.question("Numero: ")),
        Cidade: read.question("Cidade: "),
        Estado: read.question("UF: ")
}
    cadastrar(nome,idade,sexo,end,lista_usuarios)
    armazenar(nomes_usuarios, nome)
    console.log(lista_usuarios)
}
else if(escolha == "2"){
    var resposta = parseInt(read.question("ID do usuario que deseja consultar: "))
    consultar(nomes_usuarios, resposta)
}
else if(escolha =="3"){
console.log("Aqui estão os dados dos usuários na plataforma:")
    listar(lista_usuarios)
    }
}

console.log("Obrigado por usar nosso sistema, até mais.")
