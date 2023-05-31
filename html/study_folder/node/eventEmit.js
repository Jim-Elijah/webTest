// 引入events模块并创建eventEmitter对象
const events = require('events');
const eventEmitter = new events.eventEmitter();

//绑定事件处理程序
var connectHandler = function connected(){
    console.log('connected is called.');
};
eventEmitter.on('connection', connectHandler);

//触发事件
eventEmitter.emit('connection');

console.log('程序执行完毕');
