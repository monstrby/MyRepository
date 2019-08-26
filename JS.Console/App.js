const alert = require('alert-node');
var prompt = require('prompt-sync')();
for (; ;) {
    let time = prompt('How many time? 0 is exit ');
    console.log = ('Result:', time);
    if (time === '0') {
        break;
    }
}
