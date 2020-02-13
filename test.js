const single = require(process.cwd() + '/index.js');
//comment the line above, and uncommentbelow for checking inline TS errors
// import single from './index.js';

var theLogFunction = () => {console.log('this is "theLogFunction" running\n\n');}
//
//
console.log('"single" used with the name "exampleName1" will be run once, then disabled\n');
setTimeout(() => {
    single('exampleName1', theLogFunction, 2400);
    single('exampleName1', theLogFunction, 2400);
    single('exampleName1', theLogFunction, 2400);
    single('exampleName1', theLogFunction, 2400);
    setTimeout(() => {
        single('exampleName1', theLogFunction, 2400);
        single('exampleName1', theLogFunction, 2400);
        single('exampleName1', theLogFunction, 2400);
        single('exampleName1', theLogFunction, 2400);
        single('exampleName1', theLogFunction, 2400);
        single('exampleName1', theLogFunction, 2400);
        setTimeout(() => {
            console.log('...then re-enabled when the "time" argument has expired\n');
            setTimeout(() => {
                single('exampleName1', theLogFunction, 2400);
            }, 1200)
        }, 1200)
    }, 600)
}, 1200);