console.log('5 === 5 > ', 5 === 5);
console.log('true === true > ', true === true);
console.log('false === false >', false === false);
console.log('"abc" === "abc" >', "abc" === "abc");
console.log('undefined === undefined >', undefined === undefined);
console.log('{} === {} > ', {} === {});

const obiekt = {foo: "bar"};
const obiekt2 = {foo: "bar"};
const obiekt3 = obiekt
console.log('obiekt === obiekt', obiekt === obiekt);
console.log('obiekt === obiekt2', obiekt === obiekt2);
console.log('obiekt === obiekt3', obiekt === obiekt3);
console.log('{foo: "bar"} === {foo: "bar"} > ', {foo: "bar"} === {foo: "bar"});


console.log('[1,2,3] === [1,2,3] >', [1,2,3] === [1,2,3]);


console.log('test', Object.entries([1,2,3])); //test czy entries dziala na tablicy