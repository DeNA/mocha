describe('prepare test', function(){
  it('should execute prepares in order', function(){
    var results = require('./app').results;
    results.length.should.equal(2);
    results[0].should.equal('p1');
    results[1].should.equal('p2');
  })
});

