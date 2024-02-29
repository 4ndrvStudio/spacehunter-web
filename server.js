const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// const options = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// };

// const server = https.createServer(options, app);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});