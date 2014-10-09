var cp = require('child_process');


var  _exec = function(args, cb){
  cp.exec("ProxyToggle.exe " + args, {cwd:__dirname + "/bin"}, function (error, stdout, stderr) {
    if (error !== null)
      throw ('exec error: ' + error);
    cb();
  })
};

var Proxy =  {
  disable : function(cb){
    _exec("", cb);
  },

  enable : function(proxyString, cb){
   _exec(proxyString, cb);
  },

};

module.exports = Proxy;