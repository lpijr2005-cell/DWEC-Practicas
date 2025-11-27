fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    const user = data.results[0];

    //Variables para almacenar los datos del usuario que sacamos por pantalla
    const image = user.picture.large;
    const name = `${user.name.title}.${user.name.first} ${user.name.last}`;
    const email = `Email: ${user.email}`;
    const address = `${user.location.street.name} ${user.location.street.number}`;
    const country = ` ${user.location.country}`;

    //Los añadimos al html
    document.getElementById('image').src = image;
    document.getElementById('name').textContent = name;
    document.getElementById('address').textContent = address;
    document.getElementById('country').textContent = country;
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });
