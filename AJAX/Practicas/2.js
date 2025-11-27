fetch('https://dummyjson.com/products/')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then((data) => {
    //
  })
  .catch((error) => {
    console.error('Error en la petición:', error);
  });
