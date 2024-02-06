class Libros {
    constructor(titulo, autor) {
        this.$titulo = titulo
        this.$autor = autor
        this.$estado = true
    }
    disponibilidad() {
        return this.$estado
    }
    ocupado() {
        return this.$estado = false
    }
    libroPrestado(){
        return this.$titulo
    }


}
const libro1 = new Libros('Fluir Una Psicologia de la felicidad', 'Mihaly Csikszentmihalyi')
const libro2 = new Libros("Calculo de Larson", "Larson")

class Socios {
    constructor(nombre, socioId) {
        this.$nombre = nombre
        this.$socioId = socioId
        this.$librosDelSocio = []
    }

    prestarLibro(libro) {
        if (libro.disponibilidad()) {
            console.log("Libro prestado con exito a: " + this.$nombre)
            libro.ocupado()
            this.$librosDelSocio.push(libro) 
        } else {
            alert("Ese libro ya ha sido prestado")
        }
    }
    
    MostrarLibros(){
        this.$librosDelSocio.forEach((element=>{
            console.log(element)
        }))
    }
}

const cliente1 = new Socios("Rosmeo", 876361)
cliente1.prestarLibro(libro1)
cliente1.MostrarLibros()

const cliente2 = new Socios("Androso", 817219)
//cliente2.prestarLibro(libro1)