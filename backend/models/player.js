const mongoose = require ('mongoose')

const playerSchema = new mongoose.Schema({
    name: String,
    team: String,
    position: String,
    jerseyNumber: Number,
    championships: Number,
    PPG: Number,
    RPG: Number,
    APG: Number,
    BPG: Number,
    SPG: Number, 
    FGP: Number,
    imageurl: String
})

const Player = mongoose.model("Player", playerSchema)


module.exports = Player
