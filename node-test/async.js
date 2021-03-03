const myGenerator = function* () {
    yield 1;
    console.log(1);
    yield 2;
    console.log(2);
    yield 3;
};

const gen = myGenerator();
gen.next();
gen.next();
setTimeout(() => {
    gen.next();
}, 2000);
