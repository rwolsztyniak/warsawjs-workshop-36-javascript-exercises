const a = {
    propertyA: 'A',
    sayHello() {console.log('Hello');},
    propertyAB: 'in A',
        };
const b = Object.create(a);
b.propertyB = "B";
b.propertyAB = 'in B';
const c = {propertyC: 'C'};
const d = Object.create(b);
d.propertyD = 'D';
/*
console.log('a.propertyA', " -> ",  a.propertyA);
console.log('b.propertyB', " -> ",  b.propertyB);
console.log('c.propertyC', " -> ",  c.propertyC);
console.log();
console.log('c.propertyA', " -> ",  c.propertyA);
console.log();
console.log('b.propertyB', " -> ",  b.propertyB);
console.log('b.sayHello', " -> ",  b.sayHello());
b.sayHello();
console.log();
console.log('b.__proto__', " -> ",  b.__proto__);

console.log('b.__proto__ === a', " -> ", b.__proto__ === a);
console.log('a.isPrototypeOf(b)', " -> ", a.isPrototypeOf(b));
*/
console.log('a.propertyA', " -> ",  a.propertyA);
console.log('a.propertyB', " -> ",  a.propertyB);
console.log('a.propertyD', " -> ",  a.propertyD);
console.log('a.propertyAB', " -> ",  a.propertyAB);
console.log('a.toString()', " -> ",  a.toString()); //.toString pochodzi z 
console.log();
console.log('b.propertyA', " -> ",  b.propertyA);
console.log('b.propertyB', " -> ",  b.propertyB);
console.log('b.propertyD', " -> ",  b.propertyD);
console.log('b.propertyAB', " -> ",  b.propertyAB);
console.log('b.toString()', " -> ",  b.toString());
console.log();
console.log('d.propertyA', " -> ",  d.propertyA);
console.log('d.propertyB', " -> ",  d.propertyB);
console.log('d.propertyD', " -> ",  d.propertyD);
console.log('d.propertyAB', " -> ",  d.propertyAB);
console.log('b.toString()', " -> ",  b.toString());

console.log();
console.log('b.__proto__ === a', " -> ", b.__proto__ === a);
console.log('a.isPrototypeOf(b)', " -> ", a.isPrototypeOf(b));
console.log();
console.log('d.__proto__ === b', " -> ", d.__proto__ === b);
console.log('b.isPrototypeOf(d)', " -> ", b.isPrototypeOf(d));
console.log();
console.log('d.__proto__ === a', " -> ", d.__proto__ === a);
console.log('d.__proto__.__proto__ === a', " -> ", d.__proto__.__proto__ === a);
console.log('a.isPrototypeOf(d)', " -> ", a.isPrototypeOf(d));

console.log();
console.log('a.__proto__', a.__proto__);
console.log('a.__proto__ === Object.prototype',a.__proto__ === Object.prototype);
console.log('Object.prototype', Object.prototype);
console.log('Object.prototype.__proto__', Object.prototype.__proto__);
//console.log(null.toString());
console.log('Object.prototype.toString()', Object.prototype.toString());
//console.log('Object.prototype.__proto__.toString()', Object.prototype.__proto__.toString());
console.log('object.entries', Object.entries(a));