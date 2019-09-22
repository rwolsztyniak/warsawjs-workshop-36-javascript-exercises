const a = {propertyA: 'A', sayHello() 
            {console.log('Hello');}
        };
const b = Object.create(a);
b.propertyB = "B";
const c = {propertyC: 'C'};

console.log('a.propertyA', a.propertyA);
console.log('b.propertyB', b.propertyB);
console.log('c.propertyC', c.propertyC);
console.log();
console.log('c.propertyA', c.propertyA);
console.log();
console.log('b.propertyB', b.propertyB);
console.log('b.sayHello', b.sayHello());
b.sayHello();
console.log();
console.log('b.__proto__', b.__proto__);