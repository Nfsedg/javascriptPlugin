function* simpleGenerator() {
    console.log('Generator start')
    yield 1;
    yield 2;
    yield 3;
    console.log('Generator end')
}

const gen = simpleGenerator()
gen.next();

function* idMaker() {
    let id = 1;
    while(true) {
        yield id
        id = id + 1;
    }
}

function* idMakerWithReset() {
    let id = 1
    let reset;
    if(reset) {
        id = 1
    } else {
        id += 1
    }
}

function* fibonacci() {
    let a = 1;
    let b = 1;
    while(true) {
        const nextNumber = a + b;
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const gen = fibonacci()