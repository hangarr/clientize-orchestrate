# clientize-orchestrate
## Clientize reverse-proxy client for Orchestrate.io

This can be used client-side or server-side to talk directly to the Orchestrate.io API or to a Clientize reverse-proxy set up to talk to the Orchestrate.io API. The client is a child object derived from the Orchestrate.io v0.4.0 client.

The reverse-proxy client incorporates three changes to the Orchestrate client to operate in the browser:

1. The `request` HTTP client must be replaced with the `browser-request` HTTP client.
2. The `XMLHttpRequest` response headers must be explicitly added to the response object as in the response objects for server-side HTTP requests.
3. Bearer-token mode authorization must be supported to avoid browser default to Basic mode authorization in `XMLHttpRequests`.

### Replacing the `request` HTTP client
To make the client work in a browser, the `request` package must also be replaced in the Orchestrate parent object. This tyically can be done using the `browserify-request` transform during the `browserify` build to avoid modifying the Orchestrate client.

### Bearer-token mode authorization
Although the `XMLHttpRequest` object in modern browsers will do CORs requests to CORs-enabled servers, they will not send `Authorization: Bearer` headers. Instead they will automatically convert `Authorization: Bearer` headers to `Authorization: Basic` headers

To overcome this problem, the client implements a custom `X-Clientize-Authorization` header.  The Clientize reverse proxy server is configured to say it will accept this header in the preflight response to browser cross-domain requests.
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
This configuration uses `Authentication: Basic` as in the Orchestrate parent client.
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
When the token member is omitted not authorization headers are sent. When a `'token'` string is supplied `Authorization: Basic` header is sent.

There are two additional options for the `token` member:

1) To send the `Authorization: Basic` header (implemented by the `browser-request` and `request` HTTP client):
```
var db = oio({
    ...
    token: {
        user: 'username',
        pass: 'password'
    }
}
```
2) To avoid the built-in browser authorization system when on an `XMLHttpRequest` by sending the `X-Clientize-Authentication` custom header:
```
var db = oio({
    ...
    token: {
        bearer: 'token'
    }
}
```

