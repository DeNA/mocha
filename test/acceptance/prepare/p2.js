module.exports = function () {
  var _resolve, _reject;
  setTimeout(function () {
    require('./app').results.push('p2');
    if (_resolve) {
      _resolve();
    }
  }, 1);

  // return fake promise
  return {
    then: function(resolve, reject) {
      _resolve = resolve;
      _reject = reject;
    }
  };
};
