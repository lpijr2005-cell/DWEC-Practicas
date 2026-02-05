const salida = document.getElementById('salida');
const nombreUsuario = localStorage.getItem('nombreUsuario');

if(nombreUsuario) {
    salida.innerHTML = `Bienvenido ${nombreUsuario}`;
}
else {
    salida.innerHTML = `
    <input type="text" id="nombre" placeholder="Escribe tu nombre">
    <button id="guardar">Guardar</button>
    `;

    document.getElementById('guardar').addEventListener('click', () =>{
        var nombre = document.getElementById('nombre').value;
        if(nombre){
            localStorage.setItem('nombreUsuario', nombre);
            location.reload();
        }
        else {
            alert('Introduce un nombre de usuario');
        }
    });
}