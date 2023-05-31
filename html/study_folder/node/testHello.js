const Hello = require('./hello');

var h = new Hello('Jack');
console.log(h);
h.getName();
h.setName('Mary');
h.getName();