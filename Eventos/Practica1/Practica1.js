select = document.getElementById('options');

select.addEventListener('change', function () {
  //Saludar
  if (select.value === '1') {
    var mensaje = document.createElement('p');
    mensaje.textContent = 'Buenos dias tenga usted';
    document.getElementById('salida').appendChild(mensaje);
  }
  //Crear caja roja
  else if (select.value === '2') {
    var caja = document.createElement('div');

    caja.textContent = 'Nueva caja';
    caja.style.backgroundColor = 'red';
    caja.style.width = '100px';
    document.getElementById('salida').appendChild(caja);
  }
  //Generar número aleatorio entre 1 y 100
  else {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('salida').innerHTML +=
      `<p>El número generado es: ${randomNumber}</p>`;
  }
});

//Borrar el contenido impreso anteriormente
function borrar() {
  var salida = document.getElementById('salida');

  salida.innerHTML = '';
}

const boton = document.createElement('button');
boton.addEventListener('click', borrar);
boton.textContent = 'Reiniciar';
//Adjuntamos el botón a nuestra página
document.getElementById('inputs').appendChild(boton);
