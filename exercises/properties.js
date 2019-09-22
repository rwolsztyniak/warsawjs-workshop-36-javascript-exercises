const extraPropertyName = 'isEmployee';
const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    [extraPropertyName]: false,
    email: undefined,
};

person['age'] = 70;
person['place of birth'] = 'Warsaw';
person['100'] = 'abc';
person[extraPropertyName] = true;

console.log('person', person);
console.log('person.companyName', person.companyName);
console.log('person.hasOwnProperty("companyName")', person.hasOwnProperty("companyName"));
console.log('person.hasOwnProperty("email")', person.hasOwnProperty("email"));
