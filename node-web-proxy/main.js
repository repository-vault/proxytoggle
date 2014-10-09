var cp = require('child_process');

var Proxy =  {
  disable : function(cb){
    cp.exec("ProxyToggle.exe", cb)
  },
  enable : function(proxyString){
    cp.exec("ProxyToggle.exe " + proxyString, cb)
  },

};

module.exports = Proxy;