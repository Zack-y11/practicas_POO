class Empleado {
    constructor(nombre, fechaIngreso, salario, userId) {
        this.$nombre = nombre;
        this.$fechaIngreso = fechaIngreso;
        this.$salario = salario;
        this.$id = userId
    }

    calcularTiempo() {
        let fechaActual = new Date()
        let year = fechaActual.getFullYear()
        let fechaSplit = this.$fechaIngreso.split("-")

        return year - fechaSplit[2]
    }

    setNombre(nombre) {
        return this.$nombre ``= nombre
    }
    setSalario(salario) {
        return this.$salario = salario
    }
    getSalario(){
        return this.$salario
    }
    calcularBono() {
        if (this.calcularTiempo() === 1) {
            let bonificacion = this.$salario * 0.05;
            console.log(`La bonificacion es de: $ ${bonificacion}`)
        } else if (this.calcularTiempo() == 2) {
            let bonificacion = this.$salario * 0.10;
            console.log(`La bonificacion es de: $ ${bonificacion}`)
        }else if(this.calcularTiempo() == 3){
            let bonificacion = this.$salario*0.15;
            console.log(`La bonificacion es de: $ ${bonificacion}`)
        }else if(this.calcularTiempo() > 4){
            let bonificacion = this.$salario*0.20;
            console.log(`La bonificacion es de: $ ${bonificacion}`)
        }
    }
}

class Departamento {
    constructor(nombre) {
        this.$nombre = nombre;
        this.$empleadoList = [];
        this.$gerente = ''
    }

    set Manager(nuevo){
        this.$gerente = nuevo
    }
    getManager(){
        return this.$gerente
    }

    agregarEmpleadoList(empleado) {
        let empleadoExiste = this.$empleadoList.indexOf(empleado)
        if (empleadoExiste != -1) {
            alert('No se puede agregar al mismo empleado')
        } else {
            this.$empleadoList.push(empleado)
            alert('Se agrego el empleado correctamente')
        }

    }
    calcularSalario() {
        let sumaSalario = 0
        if (this.$empleadoList.length > 0) {
            this.$empleadoList.forEach((empleado) => {
                sumaSalario += empleado.getSalario();
                console.log("Suma del departamento: " + sumaSalario);
            })
        }

    }

    eliminarEmpleadoList(empleado) {
        let posicionEmpleado = this.$empleadoList.indexOf(empleado)
        if (posicionEmpleado != 1) {
            this.$empleadoList.splice(posicionEmpleado, 1)
            alert("Se elimino correctamente el empleado")
        }
    }
}

const empleado1 = new Empleado('Isaac', '01-01-2019', 400, '871262-2')
const empleado2 = new Empleado('Luis', '01-05-2022', 300, '934812-1')
const empleado3 = new Empleado('Kali', '15-11-2021', 350, '123456-7')
empleado1.setNombre('Natanael')
console.log(empleado1)
const departamentoEmpresa = new Departamento('Contabilidad')
departamentoEmpresa.agregarEmpleadoList(empleado1)
departamentoEmpresa.agregarEmpleadoList(empleado3)
departamentoEmpresa.agregarEmpleadoList(empleado2)

departamentoEmpresa.$empleadoList.forEach((e)=>{
    console.log(e)
})
departamentoEmpresa.calcularSalario()
departamentoEmpresa.eliminarEmpleadoList(empleado1)
departamentoEmpresa.$empleadoList.forEach((e)=>console.log(e))

departamentoEmpresa.Manager = empleado1
console.log(departamentoEmpresa.getManager())

console.log(empleado1.calcularTiempo())
console.log(empleado2.calcularTiempo())
console.log(empleado3.calcularTiempo())
