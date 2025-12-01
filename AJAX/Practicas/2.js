//Funcion GET -- Parte 1 del ejercicio
function click() {
  const input = document.getElementById('numero');
  const id_producto = input.value.trim();
  //Fetch de la API
  fetch(`https://dummyjson.com/products/${id_producto}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      const p = document.createElement('p');
      p.textContent = `ID: ${data.id} — Producto: ${data.title} — Precio: ${data.price}€`;
      document.getElementById('resultado').appendChild(p);
    })
    .catch((error) => {
      const mostrar = document.createElement('p');
      mostrar.textContent = `Error en la petición:, ${error}`;
      document.getElementById('resultado').appendChild(mostrar);
    });
}

const rest = document.getElementById('datos');
rest.addEventListener('submit', function (event) {
  event.preventDefault(); // evita recargar la página
  click();
});

//Funcion POST -- Parte 2 del ejercicio

//Funcion STATUS -- Parte 3 del ejercicio
