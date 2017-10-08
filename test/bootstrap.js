before(function(done) {
  this.timeout(0);
  var app = app || require("../app");

  global.app = app;
  done();
});

after(function(done) {
  console.log();
  console.log("--------------------");
  console.log("Test Completely!!");
  console.log("--------------------");
  done();
});
