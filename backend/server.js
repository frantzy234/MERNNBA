
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/connectToDb')
connectToDb()
const playerController = require('./controllers/playerController')
const teamRoutes = require('./routes/teamRoutes'); 



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))


app.use(cors({
    origin:true,
    credentials: true
}))



app.use('/', require('./routes/authRoutes'))
app.use('/', teamRoutes);


app.get('/players',playerController.fetchPlayers)
app.get('/players/:id',playerController.fetchPlayer)
app.post('/players',playerController.createPlayer)
app.put('/players/:id',playerController.updatePlayer)
app.delete('/players/:id',playerController.deletePlayer)


app.listen(PORT,()=>{
    console.log(`Server Connected: ${PORT}`)

    
})
