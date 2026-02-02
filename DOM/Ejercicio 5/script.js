//Generales
const log = document.getElementById('log');
const lista = document.getElementById('lista');

//5.1
var precios = document.getElementsByTagName('span');
log.innerHTML += `Hay ${precios.length} precios listados <br/>`;

//5.2
var producto1 = document.getElementById('p1');
log.innerHTML += `Inner HTML: ${producto1.innerHTML} <br/>`;
log.innerHTML += `Text Content: ${producto1.textContent} <br/>`;

//5.3
var n2 = document.getElementById('n2');
n2.textContent = 'Reposición completada. ¡Gracias por vuestra paciencia!';

//5.4
var indice = 0;
while(indice < precios.length){
    var valor = parseFloat(precios[indice].textContent);
    valor = valor + 0.1;
  precios[indice].textContent = valor.toFixed(2);
  indice++
}

//5.5
lista.innerHTML += '<li id="p4">Tila <span class="precio">2.20</span> €</li>'

//5.6
var primero = document.getElementById('p1');
primero.innerHTML = 'Producto destacado <span class="precio">9.99</span> €'

//5.7
n2.parentNode.removeChild(n2)

//5.8
var x = document.getElementsByName('alumnos');
var j = 0;
while (j < x.length) {
  x[j].checked = true;
  j++;
}

//5.9
var cont = lista.getElementsByTagName('li').length;
log.innerHTML += 'Total de elementos en #lista al final: ' + cont + '<br>';
