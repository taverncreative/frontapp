const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

      
      app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://mpmipxfvpc.us-east-1.awsapprunner.com');
  next();
});

