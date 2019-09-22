function only(object, propertyNames){
    
    //Object.entries(object).forEach()

    const entries = Object.entries(object);
    console.log('entries', entries);
    const result  = {};

    entries.forEach(([propertyName, propertyValue]) => {

        if(propertyNames.includes(propertyName) ){
            result[propertyName] = propertyValue;
        };
    });

        return result;
}
const numbers = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};



console.log(
    'Object.values(numbers)', 
    Object.values(numbers));

console.log(
        'Object.keys(numbers)', 
        Object.keys(numbers));


console.log(
    'Object.entries(numbers)', 
    Object.entries(numbers));


/*const result = ['foo', 'bar', 2, 'baz']
    .map((item) => `${item}!`) //string template
    .map((item) => `${item}!!! /`)
    .forEach((item) => `${item}??? `)

console.log('result', result);
*/

console.log(
    'FINAL: ',
    'only(numbers, ["b", "c"])', 
    only(numbers, ["b", "c"])
);
