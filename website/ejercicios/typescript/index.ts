//Boolean
let muted: boolean = true;
muted = false

// Numeros

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let result = numerador / denominador;

// String

let nombre: string = 'Richard';
let saludo = `Namae wa ${nombre}`

//Arrays  Arreglos
let people: string[] = []
people = ["Isabel", "Nicole", "Raul"]
// people.push(9000)

let peopleAndNumber: Array< string | number > = []
peopleAndNumber.push('Nombre')
peopleAndNumber.push(950)

// Enum de Enumeracion
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard' }

//Object
let someObject: object = { type: 'Wildcard' }


//Funciones
function add(a: number, b:number): number {
    return a + b;
}
const sum = add(5, 6)

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFor = createAdder(5)
const forPlus6 = addFor(4)

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`
}

const richard2 = fullName('Richard');

console.log(richard2)

//Interfaces
enum Color {
    rojo = 'Rojo',
    verde = 'Verde'
}

interface Rectagulo {
    ancho: number
    heigh: number
    color?: Color
}

let rect: Rectagulo = {
    ancho: 4,
    heigh: 6,
    // color: Color.Rojo, 
};

function area(r: Rectagulo): number {
    return r.ancho * r.heigh;
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString())