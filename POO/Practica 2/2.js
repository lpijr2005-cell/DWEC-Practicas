//Creamos la clase Ordenador
class Ordenador{
    //Constructor
    constructor(marca, modelo, ram = 4, discoDuro = 512, pulgadas = 17){
        this.marca  = marca;
        this.modelo  = modelo;
        this.ram  = ram;
        this.discoDuro = discoDuro;
        this.pulgadas = pulgadas;
    }
    //Metodos
    toString(){
       return `Marca: ${this.marca}<br>Modelo: ${this.modelo}<br>Memoria RAM: ${this.ram}GB<br>Disco Duro: ${this.discoDuro}GB<br>Pulgadas pantalla: ${this.pulgadas}`
    }
}

class Portatil extends Ordenador {
    //Constructor
    constructor(marca, modelo, ram = 4, discoDuro = 256, pulgadas = 12, autonomia = 4){
        super(marca, modelo, ram, discoDuro, pulgadas)
        this.autonomia = autonomia;
    }
    //Metodos heredados
    toString(){
        return super.toString() + `<br>Autonomia: ${this.autonomia}`
    }
}
var pc = new Ordenador("Lenovo", "V15", 8)
var port1 = new Portatil("Lenovo", "V15", 8, 256)
const mostrar = document.getElementById('output')
mostrar.innerHTML = port1.toString();