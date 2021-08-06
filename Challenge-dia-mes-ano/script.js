let diaDigitado = null
let mesDigitado = null
let anoDigitado = null
let subYear = 0

 function handleIdade(){ 
    diaDigitado = document.getElementById("valorDia").value;
    mesDigitado = document.getElementById("valorMes").value;
    anoDigitado = document.getElementById("valorAno").value;
    if(anoDigitado.length < 4 || mesDigitado < 2 || diaDigitado < 2 ){
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
    let anoAtual = Date.now();
    let digitados = new Date(anoDigitado, mesDigitado, diaDigitado)
    subYear = Math.abs(anoAtual - digitados.getTime())
    dvmilis = Math.round(subYear / 31536000000)


    document.getElementById("idade").innerHTML = dvmilis + '  '+'anos';
}


function showContentByIdadeUser(){
    if(dvmilis >= 18){
        document.getElementById("saida").innerText = "Você pode acessar o conteúdo infantil, adolescente e também o adulto.";
    } 
    else if(dvmilis < 18 && dvmilis >= 12){
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteúdo infantil e adolescente."    
    }
    else {
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteúdo infantil."       
    } 
}





  


