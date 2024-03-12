//CLASE ABSTRATCA
// class SerVivo{
//     constructor(){

//     }
//     alimentarse(){

//     }
// }
// class Planta extends SerVivo{
//     constructor(){
//         super()
//     }
//     alimentarse(){
//         console.log(`La planta se ha alimentado con fotosintesis`);  
//     }
// }

// class Animal extends SerVivo{

// }
// class AnimalCarnivoro extends Animal{
//     constructor(){
//         super()
//     }
//     alimentarse(){
//         console.log(`La planta se ha alimentado con carne`);  
//     }
// }

// const plantin = new Planta()
// plantin.alimentarse()

// const leon = new AnimalCarnivoro()
// leon.alimentarse()

//POLIMORFISMO
// class Vehiculo{
//     constructor(placa, marca, modelo){
//         this._placa= placa;
//         this._marca= marca;
//         this._modelo = modelo
//     }

//     mostrarData(){
//         return `El vehiculo del modelo ${this._modelo} y marca ${this._marca} tiene la placa ${this._placa}`
//     }
// }

// class Sedam extends Vehiculo{
//     constructor(placa, marca, modelo){
//         super(placa, marca, modelo)
        
//     }
// }

class Cubo {
    constructor(nombre, textura, nombreImagen, dimension){
        this._nombre = nombre;
        this._textura = textura;
        this._imagen = nombreImagen;
        this._dimensiones = dimension
    }
    get NombreImagen(){
        return this._imagen
    }

    datos(){
        `El ${this._nombre} de ${this._textura} da uno de ${this._textura}`
    }
}

class Tierra extends Cubo{
    
    get NombreImagen(){
        return this._imagen
    }
    datos(){
        return `El bloque de Tierra da 1 de tierra`
    }
}
class Diamante extends Cubo{
    get NombreImagen(){
        return this._imagen
    }
    datos(){
        return `El bloque de Diamante da 9 de diamante`
    }
}
class Carbon extends Cubo{
    get NombreImagen(){
        return this._imagen
    }
    datos(){
        return `El bloque de Carbon da 9 de carbon`
    }
}
class Madera extends Cubo{
    get NombreImagen(){
        return this._imagen
    }
    datos(){
        return `El bloque de Madera da 4 de Madera`
    }
}

const eventTierra = document.getElementById('tierra')
eventTierra.addEventListener("click", () => {
    const miTierra = new Tierra('bloque', 'tierra','https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png', 'OverWolrd' );
    document.getElementById('mensaje').innerHTML = miTierra.datos()
    console.log(miTierra.NombreImagen)
    console.log(miTierra._imagen)
    const imgCubo = document.getElementById('imgcubo')
    imgCubo.setAttribute('src', miTierra.NombreImagen)
    
})

const eventDiamante = document.getElementById('diamante')
eventDiamante.addEventListener("click", ()=>{
    const miDiamante = new Diamante('bloque', 'diamante', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png', 'OverWolrd')
    document.getElementById('mensaje').innerHTML = miDiamante.datos()
    const imgCubo = document.getElementById('imgcubo')
    imgCubo.setAttribute('src', miDiamante.NombreImagen)

})

const eventCarbon = document.getElementById('carbon')
eventCarbon.addEventListener("click", ()=>{
    const miCarbon = new Carbon('bloque', 'Carbon', 'https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png', 'OverWolrd')
    document.getElementById('mensaje').innerHTML = miCarbon.datos()
    const imgCubo = document.getElementById('imgcubo')
    imgCubo.setAttribute('src', miCarbon.NombreImagen)
    
})

const eventMadera = document.getElementById('madera')
eventMadera.addEventListener("click", ()=>{
    const miMadera = new Madera('bloque', 'madera', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png', 'OverWolrd');
    document.getElementById('mensaje').innerHTML = miMadera.datos()
    const imgCubo = document.getElementById('imgcubo')
    imgCubo.setAttribute('src', miMadera.NombreImagen)
})