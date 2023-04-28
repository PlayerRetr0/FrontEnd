
const pessoa = {
    nome:"kaique",
    idade:22
}
if(pessoa.idade <= 0){
    console.log("voce ainda não nasceu")
} else if(pessoa.idade >= 18){
    console.log("você e maior de idade",pessoa.nome)
} else {
    console.log("menor de idade")
}