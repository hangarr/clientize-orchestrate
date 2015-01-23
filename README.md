# clientize-orchestrate
Clientize reverse-proxy client for Orchestrate.io

This can be used client-side or server-side to talk directly to the Orchestrate.io API or to a Clientize reverse-proxy set up to talk to the Orchestrate.io API
The current version works with the Orchestrate.io v0.4.0 client

## Set up as an Orchestrate.io API client just like the Orchestrate.io API client
```
var oio = require('orchestrate')(token)
```

## Set up as a Clientize reverse proxy client (see the Clientize README for more info)
```
var oio = require('clientize-orchestrate')
var db = oio(token)
```
