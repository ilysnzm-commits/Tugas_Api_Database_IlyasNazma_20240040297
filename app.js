const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const userroute = require('./routers/userroute')
dotenv.config()

const app = express()

app.use(bodyparser.json())
app.use('/api/books', userroute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/api/books`);
})
