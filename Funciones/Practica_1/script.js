function palabras() {
  let palabra;
  const palabras = [];
  //Pedimos las palabras al usuario
  do {
    palabra = window.prompt(
      'Dame una palabra para almacenarla. Si dejas vacio se saldrá del popup'
    );
    if (palabra) palabras.push(palabra);
  } while (palabra || palabra != '');

  const validas = new Set();
  //Comprobamos que no hay palabras repetidas
  for (let index = 0; index < palabras.length; index++) {
    validas.add(palabras[index]);
  }

  console.log(validas);

  const ordenadas = Array.from(validas).sort((a, b) => b.localeCompare(a));

  for (const palabra of ordenadas) {
    let mostrar = document.createElement('li');
    mostrar.textContent = palabra;
    document.getElementById('lista').appendChild(mostrar);
  }
}
palabras();
