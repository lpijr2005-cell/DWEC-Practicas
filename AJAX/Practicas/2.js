const id = document.getElementById('numero');
const id_producto = id.textContent;

function click() {
  fetch(`https://dummyjson.com/products/${id_producto}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      const product = data.results[0];
      const name = product.title;
    })
    .catch((error) => {
      console.error('Error en la petición:', error);
    });
}

click();
