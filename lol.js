var Cache = module.exports.Cache = function (options) {
  this._ = options || {};

  if (!options.ttl) this._.ttl = 1000;
  if (!options.data) {
    throw 'You must provide a data callback';
  }
}

Cache.prototype.get = function (cb) {
  var now = +new Date;
  if (
    !this.cache ||
    !this.lastCache ||
    now - this.lastCache >= this._.ttl
  ) {
    this._.data(function (data) {
      cb(data);
      this.cache = data;
      this.lastCache = +new Date;
    }.bind(this));
  } else {
    cb(this.cache);
  }
};
