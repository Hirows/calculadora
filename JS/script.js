//calculadora

function insert(num){
  var number = document.getElementById('conta').innerHTML;
  document.getElementById('conta').innerHTML = number + num
}

function clearAll(limpa){
  document.getElementById('conta').innerHTML = limpa
}

function backspace(){
  var number = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = number.substring(0, number.length -1)
}

function calcular(){
  var result = document.getElementById('conta').innerHTML;
  if(result){
    document.getElementById('conta').innerHTML = eval(result)
  }else{
    document.getElementById('conta').innerHTML = "Nada pra calcular"
  }
}

function percent() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = result/100
}


function pi() {
  document.getElementById('conta').innerHTML = Math.PI
}

function raiz() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.sqrt(result)
}

function seno() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.sin(result)
}

function cos() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.cos(result)
}

function tan() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.tan(result)
}

function negseno() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.asin(result)
}

function negcos() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.acos(result)
}

function negtan() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.atan(result)
}

function In() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.log(result)
}

function log() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.log10(result)
}

function ex() {
  var result = document.getElementById('conta').innerHTML
  document.getElementById('conta').innerHTML = Math.exp(result)
}

function changetxt(){
  document.getElementById('titulo').innerHTML = 'Científica'
}

function backtxt(){
  document.getElementById('titulo').innerHTML = 'Calculadora'
}