class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad
    }

    get Precio(){
        return this.precio
    }
    set Precio(nuevo){
        this.precio =  nuevo;
    }
    get Nombre(){
        return this.nombre
    }
    set Nombre(nuevo){
        this.nombre =  nuevo;
    }
    get Cantidad(){
        return this.cantidad
    }
    set Cantidad(nuevo){
        this.precio =  nuevo;
    }

}
class Electronicos extends Producto{
    constructor(nombre, precio, cantidad, tipo){
        super(nombre, precio, cantidad);
        this.tipo = tipo;
    }
    get Tipo(){
        return this.tipo
    }
    set Tipo(nuevo){
        this.tipo = nuevo
    }
}
class Cliente {
    constructor(nombre){
        this.nombre = nombre
    }
    get Nombre (){
        return this.nombre
    }
    set Nombre(nuevo){
        this.nombre = nuevo
    }
}
let producto1 = new Electronicos('Televisor', 600, 12, 'TV')
let producto2 = new Electronicos('Samsung S10', 300, 10,  'Celular')
let producto3 = new Electronicos('HP ProBook', 500, 8, 'Laptop')

function agregarProducto(producto){
    const body = document.getElementById("tableBody");
    
    const fila = document.createElement("tr")
    fila.innerHTML +=`
    <td class="producto">${producto.Nombre}</td>
    <td class="precio">${producto.Precio}</td>
    <td class="cantidad">${producto.Cantidad}</td>
    <td>${producto.Tipo}</td><br>
    <input type="number" placeholder="Cantidad">
    `
    body.appendChild(fila)
}

agregarProducto(producto1)
agregarProducto(producto2)
agregarProducto(producto3)

const btn = document.getElementById('comprar')

btn.addEventListener('click',()=>{
    let total = 0
    const cliente = document.getElementById('nombre').value
    let clientJS =  new Cliente(cliente)
    let inputs = document.querySelectorAll('#tableBody input[type="number"]')
    let nombreProducto = document.querySelectorAll('#tableBody td.producto')
    let precioProducto = document.querySelectorAll('#tableBody td.precio')
    let listaCompra = []
    nombreProducto.forEach((valor, indice)=>{
        console.log(valor)
        if (inputs[indice].value !=""){
            const compra={
                nombre: valor.textContent,
                precio: precioProducto[indice].textContent,
                cantidad: inputs[indice].value

            }
            listaCompra.push(compra)  
        }
        console.log(producto1.Cantidad - inputs[indice].value)
        document.querySelectorAll(`td.cantidad`)[indice].textContent= producto1.Cantidad - inputs[indice].value
        
    })
    
    listaCompra.forEach((e)=>{
        total += e.precio*e.cantidad
        console.log(e.nombre)
    })
    console.log(total)
})
