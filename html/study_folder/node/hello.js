//实现模块逻辑
function Hello(name){
    this.name = name;
}
Hello.prototype.setName = function(newName){
    this.name = newName;
};
Hello.prototype.getName = function(){
    console.log(this.name);
};

//导出模块
module.exports = Hello;