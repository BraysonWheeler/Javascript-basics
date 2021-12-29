/*strict mode to write secure js code 'use strict'; <- must be first line of code.
    Forbides certain things and creates visible errors.
    reserves keywords that might be used in future. interface, private, etc...
*/
'use strict';

let hasdriverslicense = false;
const passedtest = true;

if(passedtest){
    hasdriverslicensee = true; //missed typed var on line 6. strict mode wont allow.
}
if(hasdriverslicense){
    console.log('Has drivers licence.');
}
