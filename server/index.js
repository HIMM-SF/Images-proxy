const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy')
const cors = require('cors')
const app = express();
const PORT = 3001
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})