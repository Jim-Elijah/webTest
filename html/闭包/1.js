var aaa = (function () {
  var a = 1;

  function bbb() {
    a++;
    alert(a);
  }

  function ccc() {
    a++;
    alert(a);
  }
  return {
    b: bbb, //json结构
    c: ccc
  }
})();
aaa.b();
aaa.c();