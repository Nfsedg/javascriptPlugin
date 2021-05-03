// const zelda = {
//     name: "zelda"
// }

// zelda.saludar = function() {
//     console.log(`Hola, soy ${this.name}`)
// }

// zelda.saludar()

// const link = {
//     name: "Link"
// }

// link.saludar = function() {
//     console.log(`Hola, soy ${this.name}`)
// }

// link.saludar()


// constructor
// function hero(name) {
//     const hero = {
//         name: name
//     }
//     hero.saludar = function() {
//         console.log(`Hola, soy ${this.name}`)
//     }
//     return hero
// }

// const link = hero(link)

//

// const heroMethods = {
//     saludar: function() {
//         console.log(`Hola, soy ${this.name}`)
//     }
// }

// function hero(name) {
//     const hero = {
//         name: name
//     }
//     hero.saludar = heroMethods.saludar
//     return hero
// }

// const link = hero('Link')

//

const nuevoObjeto = Object.create(objeto)

const heroMethods = {
    saludar: function() {
        console.log(`Hola, soy ${this.name}`)
    }
}

function hero(name) {
    const hero = Object.create(heroMethods)
    hero.name = name;
    return hero
}

const link = hero('Link')

//prototype con new

function Hero(name) {
    //this = Object.create(Hero.prototype)
    this.name = name;
    //return this;
}

Hero.prototype.saludar = function () {
    console.log(`New: ${this.name}`)
}

const zelda = new Hero('Zelda')
zelda.saludar()
const link = new Hero('Link')
link.saludar()

//HERENCIA PROTOTIPAL

function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`Hola, soy ${this.name}`)
}

const zelda = new Hero('Zelda')

zelda.saludar();

console.log('Name: ', zelda.name)
console.log('Saludar: ', zelda.saludar)
console.log('toString: ', zelda.toString)
console.log('zelda.hasOwnProperty: ', zelda.hasOwnProperty('saludar'))