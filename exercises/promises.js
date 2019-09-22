function randomTrueOrFalse(){ 
    return Math.random() < 0.5;
}

console.log('randomTrueOrFalse', randomTrueOrFalse());
console.log('randomTrueOrFalse', randomTrueOrFalse());
console.log('randomTrueOrFalse', randomTrueOrFalse());
console.log('randomTrueOrFalse', randomTrueOrFalse());
console.log('randomTrueOrFalse', randomTrueOrFalse());
console.log('randomTrueOrFalse', randomTrueOrFalse());

function fetchSomeData(){
 // return new Promise((resolve, reject) => {}); //pusta funkcja (arrow function?) nie wykona sie, bo nie ma resolve+reject
    return new Promise((resolve, reject) => {
        if(randomTrueOrFalse()){
            resolve(['a','b','c']);
        } else {
            reject();
        }
    });
}

fetchSomeData()
    .then( //przyjmuje dwie funkcje
        data => {console.log('success', data); }, //sukces
        error => {console.log('ERROR', error); }
    );