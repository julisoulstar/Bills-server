const express = require('express');
const connectDB = require("./config/db");
const cors = require('cors')

const app = express();

connectDB();
app.use(cors())

app.use(express.json())

app.use('/api/facturas', require('./routes/bill'))


app.listen(4000, ()=>{
    console.log('el servidor')
})