
let idadeDigitada = null
let subYear = 0

function handleIdade(){ 
    idadeDigitada = document.getElementById("valorIdade").value; //pega valor digitado pelo usuario
    if(idadeDigitada.length < 4){
        clearData()
        return
    }        
    
    calcIdade()

    showContentByIdadeUser()
}

function clearData(){
    document.getElementById("idade").innerHTML=""
    document.getElementById("saida").innerText=""
}


function calcIdade(){
    // Variavel que será responsavel pelo resultado da subtração de ambos os anos
    let anoAtual =  new Date().getFullYear(); // Variavel que contem o ano atual
    subYear = Math.abs(anoAtual - idadeDigitada); // subtração do ano que o usuario digita - variavel do ano atual informado acima
    document.getElementById("idade").innerHTML = subYear + '  '+'anos';
}


function showContentByIdadeUser(){
    if(subYear >= 18){
        document.getElementById("saida").innerText = "Você pode acessar o conteudo infantil, adolescente e também o adulto. ";
    } 
    else if(subYear < 18 && subYear >= 12){
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil e adolescente."    
    }
    else {
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil."       
    } 
}

  


