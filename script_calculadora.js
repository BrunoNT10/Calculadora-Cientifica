// SCRIPT EM JAVASCRIPT PARA FAZER OS CÁLCULOS E MOSTRAR NO DISPLAY OS DADOS DA CALCULADORA
var expressao = '';
var resultado = '';  
var lista_numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numero = '';
var numero_fatorial = '';
var calcula_fatorial = '';
var resultado_fatorial = '';
var expressao_exibida = '';
function sendNum(digit){
       
       expressao_exibida = expressao_exibida + digit;
       expressao = expressao + digit;
       
       for(i in lista_numeros){
              if(digit == lista_numeros[i]){
                     var qtd_num = 0;
                     qtd_num = qtd_num + 1;
              }
       }
       
       if (qtd_num == 1){
              numero = numero + digit
              qtd_num = 0;
       } else if(digit == '!'){
              numero = numero;
       } else {
              numero = '';
       }
       if (digit == '!' && numero != ''){
              expressao = expressao.replace(numero, '');
              
              numero = parseInt(numero)
              var var_verifica = numero;
              for(numero; numero > 0; numero--){
                     
                     if(numero == var_verifica - 1){
                            calcula_fatorial = calcula_fatorial.replace(calcula_fatorial[0], "") + "*" + numero

                     }
                     else{
                            calcula_fatorial = calcula_fatorial + "*" + numero
                     }

              }
              resultado_fatorial = eval(calcula_fatorial);
              numero = '';
              calcula_fatorial = '';
              var caractere;
              
              expressao = expressao.replace('!', '');
              expressao = expressao + resultado_fatorial;
              
       }

       if(expressao[0] == '0'){
              expressao_exibida = expressao_exibida.replace('0', '');
              expressao = expressao.replace('0', '');
       }
       console.log(expressao)
       document.getElementById('screen').placeholder = expressao_exibida;

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
       expressao_exibida = resultado;
       console.log(expressao)
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
       expressao_exibida = '';
       document.getElementById('screen').placeholder = expressao;
       return expressao;    
}
function fatorial(){

}