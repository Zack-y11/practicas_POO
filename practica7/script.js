class Sword {
  constructor(type, damage) {
    this.type = type;
    this.damage = damage;
  }
  get Damage() {
    return this.damage
  }
  set Damage(nuevo){
    return this.damage = nuevo
  }
  

  ataque() {
  }
}
class DiamondSword extends Sword {
  constructor() {
    super('Diamond', 9)
  }

  ataque() {
    return this.damage
  }
}
class IronSword extends Sword {
  constructor() {
    super('Iron', 7)
  }

  ataque(critico) {

    if(critico < 20){
      alert(critico)
      return this.damage+2
    }else{
      return this.damage
    }
  }
}
class StoneSword extends Sword {
  constructor() {
    super('Stone', 5)
  }

  ataque(critico) {
    if(critico <= 50){
      return this.damage + 10
    }else{
      return this.damage
    }

  }
}

class Mob {
  constructor(nombre, vida) {
    this.vida = vida;
    this.nombre = nombre;
  }
  get Vida() {
    return this.vida
  }
  set Vida (nuevo){
    return this.vida = nuevo
  }

  atacando(damage) {
    return this.vida - damage
  }
}

let zombie = new Mob('Zombie', 100);
let  ironSword = new IronSword();
let stoneSword = new StoneSword();
let diamondSword = new DiamondSword();

document.getElementById('attackButton').addEventListener('click', function () {
  document.querySelector('.sword').style.transform = 'rotate(-45deg)';
  let result = document.getElementById('resultado')
  let actual = zombie.atacando(ironSword.ataque(critico))
  console.log(actual)
  zombie.Vida = actual
  result.innerHTML = `El ${zombie.nombre} tiene ${zombie.Vida} de vida.<br>`
  if(zombie.Vida <= 0 ) {
    alert("Has derrotado al Zombie")
    result.innerHTML = `El ${zombie.nombre} tiene 0 de vida.<br>`
  }

  setTimeout(function () {
    document.querySelector('.sword').style.transform = 'rotate(0deg)';
  }, 500);
});

const critico = ()=>{
  let probabilidad = ((Math.random()*100)).toFixed(2)
  
}

