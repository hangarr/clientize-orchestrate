# clientize-orchestrate
## Clientize reverse-proxy client for Orchestrate.io

This can be used client-side or server-side to talk directly to the Orchestrate.io API or to a Clientize reverse-proxy set up to talk to the Orchestrate.io API
The current version works with the Orchestrate.io v0.4.0 client

### Orchestrate.io API client
Set up to talk directly to the Orchestrate.io API client just like the Orchestrate.io API client
```
var db = require('orchestrate')(token);
```
or
```
var oio = require('orchestrate');

var db = oio(token);
```

### Clientize reverse-proxy API client
Set up as a Clientize reverse proxy client talking to the Orchestrate.io API (see the Clientize README for more info)
```
var oio = require('clientize-orchestrate');

var db = oio({
	protocol: 'http',
	host: 'hostname',
	port: 8000,   		// (optional)
	prefix: '/www.hostname.com/' + 'whatever',  // optional
	token: 'token'		// (optional)
});
```
