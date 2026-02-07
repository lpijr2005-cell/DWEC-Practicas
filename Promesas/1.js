function procesarPago(producto) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (producto.trim() !== "") {
            resolve(`Pago procesado correctamente para ${producto}`);
          } else {
            reject("No se puede procesar el pago sin producto");
          }
        }, 1500);
      });
    }

    function enviarPedido(direccion) {
      return new Promise((resolve, reject) => {
        if (direccion.trim() === "") {
          reject("Dirección de envío no válida");
          return;
        }

        setTimeout(() => {
          const errorAleatorio = Math.random() < 0.2;

          if (errorAleatorio) {
            reject("Error durante el envío, intente de nuevo.");
          } else {
            resolve(`Pedido enviado correctamente a ${direccion}`);
          }
        }, 2000);
      });
    }

    document.getElementById("comprar").addEventListener("click", () => {
      const producto = document.getElementById("producto").value;
      const direccion = document.getElementById("direccion").value;
      const salida = document.getElementById("salida");

      salida.textContent = "Procesando compra...";

      procesarPago(producto)
        .then(mensajePago => {
          salida.textContent = mensajePago;
          return enviarPedido(direccion);
        })
        .then(mensajeEnvio => {
          salida.textContent = mensajeEnvio;
        })
        .catch(error => {
          salida.textContent = error;
        });
    });