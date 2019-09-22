console.log('A');
/*setTimeout(() => {
    console.log("C")
}, 2000);
*/
const printC = () => {
    console.log('C')
};
setTimeout(printC, 2000);

console.log('B');

