//Crear la clase
class Rectangulo {
    //Constructor
    constructor(heigth = 1, width = 1){
        if(heigth >= 0){
            this.heigth = heigth
        }
        if(width >= 0){
            this.width = width
        }
        
    }   
    //Metodos
    cambiarDimensiones(num1, num2){
        this.heigth = num1
        this.width = num2
    }
    calcularArea(){
        return this.heigth * this.width
    }
    copia(){
        return new Rectangulo(this.heigth, this.width)
    }
    comparar(rect){
        if(this.calcularArea() > rect.calcularArea()){
           return "Mayor"
        }
        else if(this.calcularArea() ===  rect.calcularArea()){
            return "Igual"
        }
        else{
            return"Menor"
        }
    }
}

var rect1 = new Rectangulo(8, 7);
var rect2 = new Rectangulo(6, 5)
var copia = rect1.copia();


var mostrar = document.getElementById('output');
mostrar.innerHTML = `Rectángulo: ${rect1.heigth}, ${rect1.width}<br> Area: ${rect1.calcularArea()}<br> Comparación con otro rectángulo: ${rect1.comparar(rect2)}`


    
