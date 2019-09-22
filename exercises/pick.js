function onlyVersion1(object, propertyNames){
    
    const result  = {};

    Object.entries(object).forEach(([propertyName, propertyValue]) => {

        if(propertyNames.includes(propertyName) ){
            result[propertyName] = propertyValue;
        };
    });

        return result;
}

function onlyVersion2(object, propertyNames){
    
    const result2  = {};
    //console.log('propertyNames: ', propertyNames);

    propertyNames.forEach(propertyName => {
        if(Object.keys(object).includes(propertyName)){
            result2[propertyName] = object[propertyName];
        }
        
    });
    return result2;
}

function onlyVersion3(object, propertyNames){
    
    const result  = {};

    propertyNames.forEach(propertyName => {
        if(object.hasOwnProperty(propertyName)){
            result[propertyName] = object[propertyName];
        }
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
    'onlyVersion1(numbers, ["b", "c"])', 
    onlyVersion1(numbers, ["b", "c"])
);

console.log(
    'FINAL2: ',
    'onlyVersion2(numbers, ["b", "c", "e"])', 
    onlyVersion2(numbers, ["b", "c", 'e'])
);

console.log(
    'FINAL3: ',
    'onlyVersion3(numbers, ["b", "c", "e"])', 
    onlyVersion3(numbers, ["b", "c", 'e'])
);

