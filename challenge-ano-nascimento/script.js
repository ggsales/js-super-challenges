
function pegaValor(){ 
    let idadeDigitada = document.getElementById("valorIdade").value; //pega valor digitado pelo usuario
    if(idadeDigitada.length < 4){
        document.getElementById("idade").innerHTML=""
        document.getElementById("saida").innerText=""
        console.log("saiu")
         return  
        }
        
    let subYear = 0 // Variavel que será responsavel pelo resultado da subtração de ambos os anos
    let anoAtual =  new Date().getFullYear(); // Variavel que contem o ano atual
    subYear = Math.abs(anoAtual - idadeDigitada); // subtração do ano que o usuario digita - variavel do ano atual informado acima
    document.getElementById("idade").innerHTML = subYear + '  '+'anos';
    

    if(subYear >= 18){
        document.getElementById("saida").innerText = "Você pode acessar o conteudo infantil, adolescente e também o adulto. ";
        return
    } else {
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil e adolescente."
    }  
    if(subYear <=12){
        document.getElementById("saida").innerText  ="Você pode acessar apenas o conteudo infantil."
    }
 }








  


