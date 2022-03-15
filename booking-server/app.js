const express= require('express')
const router= require('./routes/authRoute')
const app= express()
const cors= require('cors')
const morgan= require('morgan')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req,res)=>{
    res.status(200).send("hello there")
})

app.use('/api', router)


module.exports= app