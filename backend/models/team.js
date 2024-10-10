const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    selectedPlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true }],
    selectedPositions: {
        PG: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
        SG: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
        SF: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
        PF: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
        C: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
    },
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
