# single-call! 

A simple utility function to prevent having a function called several times, when you need it to run once.

(common use case: accounting for mouse and touch events)

<hr/>

```javascript
const single = require('single-call');
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

```
output:
```
"single" used with the name "exampleName1" will be run once, then disabled

this is "theLogFunction" running


...then re-enabled when the "time" argument has expired

this is "theLogFunction" running
```