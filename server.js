const compression = require('compression')
const express = require('express')

// compressed compression function
var app=express();function shouldCompress(s,e){return!s.headers["x-no-compression"]&&compression.filter(s,e)}app.use(compression({filter:shouldCompress}));