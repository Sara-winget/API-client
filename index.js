const express = require('express');
const { resolve } = require('path');
const connectDB=require('./Db/db')
const port = process.env.PORT || 5000
const routes=require('./Routes/routes')
require('dotenv').config()


const app = express();
connectDB();

app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/',routes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
