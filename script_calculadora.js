// SCRIPT EM JAVASCRIPT PARA FAZER OS CÁLCULOS E MOSTRAR NO DISPLAY OS DADOS DA CALCULADORA
var expressao = '';
var resultado = '';  
var lista_numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numero = '';
var numero_fatorial = '';
var calcula_fatorial = '';
var resultado_fatorial = '';
var expressao_exibida = '';
var nova_expressao
function sendNum(digit){
       
       expressao_exibida = expressao_exibida + digit;
       expressao = expressao + digit;
       if(expressao[expressao.length-1]=='!'){
              console.log(expressao[expressao.length-1])
              expressao=''
       }

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
       }
       else {
              numero = '';
       }
       
       if(expressao_exibida=='0!'){
              expressao='1'
              expressao_exibida='1'
              console.log('SIUUU')
              console.log(expressao_exibida)
              console.log(expressao)
       }

       else if(expressao_exibida=='1!'){
              expressao='1'
              expressao_exibida='1'
              console.log('SIUUU')
              console.log(expressao_exibida)
              console.log(expressao)
       }

       console.log(`ERRO3 ${expressao}`)

       if (digit == '!' && expressao_exibida!='1'){
             

              if (numero != ''&& numero!='0'){
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
                     

                     

              }
              else if (resultado != 0){
                     var var_verifica = resultado;
                     for(resultado; resultado > 0; resultado--){
                     
                            if(resultado == var_verifica - 1){
                                   calcula_fatorial = calcula_fatorial.replace(calcula_fatorial[0], "") + "*" + resultado

                            }
                            else{
                                   calcula_fatorial = calcula_fatorial + "*" + resultado
                            }

                     }
              }
             
              resultado_fatorial = eval(calcula_fatorial);
              numero = '';
              calcula_fatorial = '';
              
              expressao = expressao.replace('!', '');
              expressao = expressao + resultado_fatorial;
              
       }
       console.log(`ERRO2 ${expressao}`)

       if(digit=='**2'){
            expressao_exibida = expressao_exibida.replace('**2', '^2');
       }

       if(digit=='**(-1)'){
              expressao_exibida = expressao_exibida.replace('**(-1)', '^(-1)');
         }

       if(digit=='**'){
              expressao_exibida = expressao_exibida.replace('**', '^');

       }

       if(digit=='*10**'){
              expressao_exibida = expressao_exibida.replace('*10**', 'E');
       }

       if(digit=='√'){
             
           
           nova_expressao= expressao.replace(/.$/, '');
       console.log(expressao)
       expressao=nova_expressao
       expressao_exibida=nova_expressao
      // console.log(`teste ${expressao_exibida}`)
       expressao_exibida = Math.sqrt(Number(expressao_exibida))
       expressao = Math.sqrt(Number(expressao))
       expressao_exibida = `${expressao_exibida}`

       
       
       }
       console.log(`ERRO1 ${expressao}`)


       if(expressao[0] == '0' && expressao.length>1){
              expressao_exibida = expressao_exibida.replace('0', '');
              expressao = expressao.replace('0', '');
              console.log(expressao_exibida)
       }

       console.log(`ERRO0 ${expressao}`)
       document.getElementById('screen').placeholder = expressao_exibida;
       
       return expressao;

}
function equalTo(){
       numero = ''
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
           expressao_exibida = '';
           document.getElementById('screen').placeholder = '';
           
           setTimeout(function(){
              document.getElementById("mensagem_erro").innerHTML = "";
           }, 5000)
           return expressao    
       }
       
}

function deletar_char(){

       nova_expressao= expressao.replace(/.$/, '');
       console.log(expressao)
       expressao=nova_expressao
       expressao_exibida=nova_expressao
       document.getElementById('screen').placeholder = expressao;
       document.getElementById('screen').placeholder = expressao_exibida;
       console.log(nova_expressao)
       return expressao
}

function clearScr(){
	expressao = '';
       expressao_exibida = '';
       numero = '';
       document.getElementById('screen').placeholder = expressao;
       return expressao;    
}
