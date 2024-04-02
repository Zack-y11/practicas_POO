import Users from "./users.js";
import Compra from "./compra.js";

const usuario1 = new Users('Manuel', '8173713-1');
const compra1 = new Compra('Camisa', 25, usuario1);

console.log(`El usuario ${compra1.Usuario.Name}`)
console.log(`Compro: ${compra1.Producto}`)

document.getElementById('factura').innerHTML += `
    Factura del Usuario: <b>${compra1.Usuario.Name}</b><br>
    Productos Comprados: <b>${compra1.Producto}<b>;
`;

