var five = require("johnny-five");
var board = new five.Board();

let servo;
board.on("ready", function() {
  servo = new five.Servo(10);

  exports.min = function() {
    return new Promise((resolve) => {
      // servo.min();
      console.log("min");
      servo.to(20)
      setTimeout(resolve, 1000);
    });
  }
  exports.max = function() {
    return new Promise((resolve) => {
      // servo.max();
      console.log("max");
      servo.to(160)
      setTimeout(resolve, 1000);
    });
  }
});


const queue = [];
let runningQueue = false;

function startQueue() {
  if (queue.length === 0) {
    runningQueue = false;
    return;
  }
  runningQueue = true;
  const func = queue.splice(0,1)[0];
  func().then(startQueue);
}
exports.cycle = function() {
  
  queue.push(this.max);

  queue.push(this.min);
  
  if (!runningQueue) {
    startQueue();
  }
}