/*calculadora com inputs*/
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var resultado = document.getElementById('resultado2')

var btnsomar = document.getElementById('somar')
var btnsub = document.getElementById('sub')
var btndiv = document.getElementById('div')
var btnmult = document.getElementById('mult')

btnsomar.addEventListener('click', function(){
    resultado.textContent = 'resultado: ' + (parseint(num1.value) + parsefloat(num2.value));
})

btnsub.addEventListener('click', function(){
    resultado.textContent = 'resultado: ' + (parseint(num1.value) - parsefloat(num2.value));
})

//-----------------------------------------------------------------------------------------------------------------------------------------------//

var calculo = document.getElementById('calculo')
var resultado = document.getElementById('resultado')
var limpar = document.getElementById('limpar')
var divisao = document.getElementById('divisao')
var muntiplicacao = document.getElementById('muntiplicacao')
var subtracao = document.getElementById('subtracao')
var soma = document.getElementById('soma')
var igual = document.getElementById('igual')
var n9 = document.getElementById('n9')
var n8 = document.getElementById('n8')
var n7 = document.getElementById('n7')
var n6 = document.getElementById('n6')
var n5 = document.getElementById('n5')
var n4 = document.getElementById('n4')
var n3 = document.getElementById('n3')
var n2 = document.getElementById('n2')
var n1 = document.getElementById('n1')
var n0 = document.getElementById('n0')

var numero1 = ''
var numero2 = ''
var operacao = ''

n0.addEventListener('click', function (){
  if (operacao == null){
    numero1 = numero1 + n0.textContent;
    calculo.innerText = numero1
  }else{
    numero2 = numero2 + n0.textContent;
    calculo.innerText = numero1 + '' + operacao + '' + numero2;  
}});

//----------------//

divisao.addEventListener('click', function () {
    operacao = divisao.textContent;
    calculo.innerText = numero1 + '' + operacao + '' + numero2;
})

igual.addEventListener('click', function() {
    if (operacao == '/'){

    }else if (operacao == "*"){

}
//aqui vai os outros else if...
else{

resultado.innerText = '**erro**';
}})