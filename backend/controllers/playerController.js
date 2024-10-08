const express = require ('express')
const Player = require ('../models/player')





const fetchPlayers = async (req,res) => {
    const players = await Player.find()
    res.json({players: players})
 

}

const fetchPlayer = async (req,res) => {
    const playerId = req.params.id
    const player = await Player.findById(playerId)
    res.json({player: player})

}

const createPlayer = async (req,res) => {
    const {name, team, jerseyNumber, championships, imageurl} = req.body
 const player = await Player.create({
    name,
    team,
    jerseyNumber,
    championships, 
    PPG: Number(req.body.PPG) || 0,
    RPG: Number(req.body.RPG) || 0,
    APG: Number(req.body.APG) || 0,
    BPG: Number(req.body.BPG) || 0,
    SPG: Number(req.body.SPG) || 0,
    FGP: Number(req.body.FGP) || 0,
    imageurl
});


    res.json({player: player})
  

}

const updatePlayer = async (req,res) => {
    const playerId = req.params.id
    const{name, team, jerseyNumber, championships} = req.body
    const player = await Player.findByIdAndUpdate(playerId, {
        name:name,
        team: team, 
        jerseyNumber: jerseyNumber,
        championships: championships,
        PPG: Number(req.body.PPG) || 0,
        RPG: Number(req.body.RPG) || 0,
        APG: Number(req.body.APG) || 0,
        BPG: Number(req.body.BPG) || 0,
        SPG: Number(req.body.SPG) || 0,
        FGP: Number(req.body.FGP) || 0,

    })

    const updatedPlayer = Player.findById(playerId)
    res.json({player: player})
     

}

const deletePlayer = async (req,res) => {
    const playerId = req.params.id
    await Player.deleteOne({
    _id: playerId
    })
    
    res.json({Success: "Deleted.."})

}


module.exports = {
    fetchPlayers, fetchPlayer,createPlayer,updatePlayer,deletePlayer
}