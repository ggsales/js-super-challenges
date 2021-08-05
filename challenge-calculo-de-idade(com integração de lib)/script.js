let subYear = 0
let dataDigitada = null
let splits = null

new Cleave ('.input-element',{
    date : true,
    datePattern: ['d', 'm', 'Y']
});

function handleIdade(){ 
    dataDigitada = document.getElementById("valorIdade").value;
    splits = dataDigitada.split('/');
    console.log(dataDigitada.length)
    if(dataDigitada.length <= 9 ){
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
    let digitados = new Date(splits[2], splits[1], splits[0])
    subYear = Math.abs(anoAtual - digitados.getTime())
    dvmilis = Math.round(subYear / 31536000000)
console.log(digitados)

    document.getElementById("idade").innerHTML = dvmilis + '  '+'anos';
}


function showContentByIdadeUser(){
    if(dvmilis >= 18){
        document.getElementById("saida").innerText = "Você pode acessar o conteudo infantil, adolescente e também o adulto. ";
    } 
    else if(dvmilis < 18 && dvmilis >= 12){
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil e adolescente."    
    }
    else {
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil."       
    } 
}




  


