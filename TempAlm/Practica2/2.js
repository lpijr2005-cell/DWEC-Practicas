let accion = 100
const precio = document.getElementById('precio');
const mensaje = document.getElementById('mensaje');

precio.textContent = `Precio: ${accion}€`

var temp = setInterval(() => {
    const cambio = Math.floor(Math.random() * 11) - 5;
    accion += cambio;

    precio.textContent = `Precio: ${accion}€`

    if(accion >= 120){
        mensaje.textContent = 'Máximo precio alcanzado'
        clearInterval(temp);
    }
    else if(accion < 80){
        mensaje.textContent = 'Mínimo precio alcanzado'
        clearInterval(temp)
    }
}
, 1000)