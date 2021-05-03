function whoIsThis() {
    return this;
}

console.log(`whoIsThis(): ${whoIsThis()}`);

function whoIsThisStrict() {
    'use strict';
    return this;
}

console.log(`whiIsThisStrict(): ${whoIsThisStrict}`)

const person = {
    name: 'Gabriel',
    saludar: function() {
        console.log(`Hola soy ${this.name}`)
    }
}

person.saludar();

function Person(name) {
    this.name = name;
}

Person.prototype.saludar = function() {
    console.log(`Namae wa ${this.name}`)
}

const angela = new Person('Angela')

angela.saludar();

//call, apply, bind


function saludar2(metro, distancia) {
    console.log(`Mi nombre es ${this.name} y corri ${metro} metros hacia el ${distancia}`)
}
const angela = {
    name: 'Angela'
}
const valores = [800, 'noreste']
    
saludar2.call(angela, 200, 'norte')

saludar2.apply(angela, valores)

//Node list

const buttons = document.getElementsByClassName('button-action');

// Error buttons no es una funcion
// buttons.forEach(button => {
//     button.onclick = () => alert('Click')
// })

Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert('Click')
})