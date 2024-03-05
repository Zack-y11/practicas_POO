class CuentaBancaria {
    constructor(titular, saldo, numeroCuenta){
        this.$titular = titular;
        this.$saldo = saldo;
        this.$numeroCuenta = numeroCuenta
    }

    get Titular(){
        return this.$titular;
    }
    set Titular(nuevo){
        this.$titular = nuevo
    }
    get Saldo (){
        return this.$saldo
    }
    set Saldo (nuevo){
        this.$saldo = nuevo
    }

    retiro(monto){
        if(monto > this.$saldo){
            // document.getElementById('actual').innerHTML=`Saldo actual: $${this.$saldo}`
            alert('NO POSEE SALDO SUFICIENTE')

        }else{
            return(this.$saldo - monto) 
        }
    }

    deposito(monto) {
        return (this.$saldo + monto)
    }
}

const usuarioBanco = new CuentaBancaria('Pepe Rodriguez', 0, '9824928')

const transaccion = ()=>{
    let cantidad = document.getElementById('cantidad').value
    console.log(cantidad)
    usuarioBanco.Saldo= usuarioBanco.retiro(parseInt(cantidad))

    document.getElementById('actual').innerHTML=`Saldo actual: $${usuarioBanco.Saldo} `

}

const transaccionAbono = document.getElementById('abono')
transaccionAbono.addEventListener('click',() =>{
    let cantidad = document.getElementById('cantidad').value
    usuarioBanco.Saldo = usuarioBanco.Saldo+parseInt(cantidad)
    document.getElementById('actual').innerHTML= `Saldo Actual: $${usuarioBanco.Saldo}`

})