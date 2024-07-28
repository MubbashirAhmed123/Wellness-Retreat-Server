const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connectDb } = require('./config/db')
dotenv.config();
const app=express()
app.use(express.json())

connectDb()

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsConfig))
app.options("*", cors(corsConfig))

app.use('/',require('./routes/retreatsRoute'))
app.use('/',require('./routes/bookRoute'))


app.get('/',(req,res)=>{
    res.send('hello')
})




const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
