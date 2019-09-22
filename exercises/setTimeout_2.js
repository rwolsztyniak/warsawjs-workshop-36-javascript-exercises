const programStartTime = (new Date()).getTime();

const print = (text) => {
    const now = new Date().getTime();
    console.log(`${text} (after ${now - programStartTime} ms)`);
};

print('A'); 

const runBlockingTask = (miliseconds) => {
    const startTime = new Date().getTime();
    while(new Date().getTime() - startTime < miliseconds){

    };

};
/*
const measureExecutontime = () => {
    const startTime = new Date().getTime();
    const endTime = new Date().getTime();
    console.log(`long blocking taks took ${endTime - startTime} miliseconds`);
}*/

const printC = () => {
    print('C');
};

setTimeout(printC, 2500);

print('B');

runBlockingTask(2000);

print('D');

