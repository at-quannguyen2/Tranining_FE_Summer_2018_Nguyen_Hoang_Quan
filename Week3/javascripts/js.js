// 1.
var fnCalculation = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(a, b) {
    return a * b;
  }
}
document.write(fnCalculation.add(5, 10));
document.write(fnCalculation.sum(5, 10));

// 2.
var greater19 = function(number) {
  if(number < 19) {
    return 19 - number;
  }
  else {
    return (number - 19) * 3;
  }
}
document.write(greater19(30));

// 3.
var fnDivisible = function(x, cal) {
  var _tmp = [];
  for(var i = 0; i < 10; i++) {
    var number = parseInt(x.replace('*', i));
    if(number % cal == 0) {
      _tmp.push(number + "");
    }
  }
  return _tmp;
}
document.write(fnDivisible('1*9', 3));
document.write(fnDivisible('1*9', 6));
document.write(fnDivisible('1234567890*', 3));
document.write(fnDivisible('1234567890*', 6));
