const EventEmitter = require('events');
//所有的构造函数都必须继承自EventEmitter类;
class MusicPlayer extends EventEmitter{};
//再通过这个构造函数来创建触发事件的对象
let musicPlayer = new MusicPlayer();

let AudioDevice = {
    play:function(track){
      console.log('playing...', track)
    },
    stop:function(track){
        console.log('stopping...', track)
    }
  }
  //监听事件
  musicPlayer.on('play',function(track){
    this.playing = true;
    AudioDevice.play(track);
  })
  //监听事件
  musicPlayer.on('stop',function(track){
    this.playing = false;
    AudioDevice.stop(track);
  });
  
  musicPlayer.emit('play','The Roots - The Fire');
  
  setTimeout(function(){
  //emit触发事件
    musicPlayer.emit('stop', 'eventEmitter')
  },1000);