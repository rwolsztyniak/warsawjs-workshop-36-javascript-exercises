function check(input){
    if (input){
        result = 'TRUE'
    } else {
        result = 'FALSE';
    }
    return (input + " (" +  typeof input + "): " + result);
}

console.log(check(''));
console.log(check(null));
console.log(check(0));
console.log(check(1));
console.log(check(2));
console.log(check(true));   
console.log(check(false));
console.log(check('false'));
console.log(check('string'));




