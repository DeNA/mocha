module.exports = function (cb) {
  setTimeout(function () {
    require('./app').results.push('p1');
    cb();
  }, 1);
};
