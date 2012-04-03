var lol = require('../');

var cache = new lol.Cache({
  ttl: 2000,
  data: function (cb) {
    setTimeout(function () {
      cb({
        lol: 'wut'
      });
    }, 3000);
  }
});

setInterval(function () {
  cache.get(console.log);
}, 1000);
