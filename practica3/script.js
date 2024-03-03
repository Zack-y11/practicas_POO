//VERIFICAR SI SE VENDIO LA MASCOTA

class Mascota {
    constructor(id, nombre, raza, edad, precio, tipo){
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.precio = precio;
        this.tipo = tipo;
    }

    get Id(){
        return this.id;
    }
    set Id (value) {
        this.id = value
    }
}

class TiendaMascota {
    constructor(){
        this.mascotas = [];
        this.mascotasVendidas = [];

    }
    addPet (pet){
        this.mascotas.push(pet)
    }
    deletePet(pet){
        let index = this.mascotas.indexOf(pet);
        if (index !== -1) {
            this.mascotas.splice(index, 1);
            alert(pet + " eliminado");
        } else{
            console.log("La mascota no existe");
        }
    }
    busqueda(mascota){
        let busqueda = this.mascotas.find(element => element.Id == mascota.Id);
        if(busqueda != undefined){
            alert('Se encontró la mascota');
            return mascota.id
        }        
    }

    comprarMascota(mascota, cliente){
        if(mascota.MascotaDisponible()){
            const venta = {cliente: cliente, mascota: mascota}
            this.mascotasVendidas.push(venta);
            this.deletePet(mascota);
        }
    }
}

class Cliente {
    constructor(nombre, dui){
        this.nombre= nombre;
        this.dui = dui;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

}