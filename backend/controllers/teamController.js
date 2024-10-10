const Team = require('../models/team');

// READ all teams
const fetchTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json({ teams });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ ID
const fetchTeam = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.json({ team });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE a new team
const createTeam = async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json({ team });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE ID
const updateTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.json({ team });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE ID
const deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.json({ message: 'Team deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { fetchTeams, fetchTeam, createTeam, updateTeam, deleteTeam }; 