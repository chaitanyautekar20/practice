const EventEmitter = require('node:events');
const { setTimeout } = require('node:timers/promises');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('Please turn off the motr');
  setTimeout(()=>{
    console.log("Please turn off the motoor");
  },3000);
});
myEmitter.emit('waterFull');
console.log("the script is runninig ");

// we need to off the type module in json file

// the code will run when waterfull event will occur