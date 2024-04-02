class Compra{
    constructor(producto, precio, usuario){
        this.producto = producto
        this.precio = precio
        this.usuario = usuario
    }
    get Producto(){
        return this.producto
    }
    get Precio(){
        return this.precio
    }
    get Usuario(){
        return this.usuario
    }
}
export default Compra;