(function() {
    let color = 'green';

    function printColor() {
        console.log(color)
    }

    printColor(color)
})();

// closures variables privadas

function makeColorPrinter(color) {
    let colorMessage = `This color is ${color}`
    return function() {
        console.log(colorMessage)
    }
}

let greenColorPrinter = makeColorPrinter();

function makeCounter(n) {
    let count = n;
    return {
        increase: function() {
            count += 1;
        },
        decrease: function() {
            count -= 1;
        },
        getCount: function() {
            return count;
        }
    }
}

let counter = makeCounter(7)

console.log('The count is ', counter.getCount())
counter.increase();
counter.increase();
console.log('The count is ', counter.getCount())
counter.decrease();
counter.decrease();
console.log('The count is ', counter.getCount())
counter.decrease
console.log('The count is ', counter.getCount())

counter.count = 0;