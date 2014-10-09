# Proxy toggle
Allows you to activate / deactivate system wide proxy configuration for windows (xp/7/ ??)
* no administrator access required (10 lines of code)

# Usage (nodejs npm)
## Install the module

```npm install node-web-proxy```

## Example
```
var proxy = require('node-web-proxy');

if(false) proxy.disable(function(){
  console.log("Proxy disabed");
});

proxy.enable("socks=127.0.0.1:8080", function(){
  console.log("Proxy enabled");
});
```


# Usage (cli)

## disable current proxy
```R:\> ProxyToggle ```

## Activate http proxy
```R:\> ProxyToggle.exe http=127.0.0.1:8080```


## Activate socks proxy
```R:\> ProxyToggle.exe socks=127.0.0.1:8080```


