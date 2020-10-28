const compression = require('compression');
const express = require('express');

const PORT = process.env.PORT || 9000;

// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

// compressed compression function
app;function shouldCompress(s,e){return!s.headers["x-no-compression"]&&compression.filter(s,e)}app.use(compression({filter:shouldCompress}));

