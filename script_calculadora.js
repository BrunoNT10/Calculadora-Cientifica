// SCRIPT EM JAVASCRIPT PARA FAZER OS CÁLCULOS E MOSTRAR NO DISPLAY OS DADOS DA CALCULADORA
var expressao = '';
var resultado = '';  
function sendNum(digit){
       expressao = expressao + digit;
       document.getElementById('screen').placeholder = expressao;

       if(expressao[0] == '0'){
              expressao = expressao.replace('0', '');
       }
       return expressao;
}
function equalTo(){
       try{
       resultado = eval(expressao);
       if (Number.isInteger(resultado)){
              document.getElementById('screen').placeholder = resultado;
   
       }
       else{
              document.getElementById('screen').placeholder = resultado.toFixed(2);
   
       }
       expressao = resultado;
       if (Number.isInteger(expressao) == false){
           expressao = expressao.toFixed(2)
       }
       if (resultado == Infinity){
              expressao="Erro!";
              document.getElementById('screen').placeholder = expressao;
              expressao='';

       }
       return expressao;
       }catch(err){
           alert("Expressão digitada inválida!")
           document.getElementById("mensagem_erro").innerHTML = "Expressão digitada inválida!"
           expressao = '';
           document.getElementById('screen').placeholder = expressao;
           setTimeout(function(){
              document.getElementById("mensagem_erro").innerHTML = "";
           }, 5000)
           return expressao    
       }
       
}

function clearScr(){
	expressao = '';
       document.getElementById('screen').placeholder = expressao;
       return expressao;    
}