const extraPropertyName = 'isEmployee';
const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    [extraPropertyName]: false,
};

person['age'] = 70;
person['place of birth'] = 'Warsaw';
person['100'] = 'abc';
person[extraPropertyName] = true;

console.log('person', person);

