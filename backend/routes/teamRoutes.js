const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    fetchTeams,
    fetchTeam,
    createTeam,
    updateTeam,
    deleteTeam
} = require('../controllers/teamController');

router.use(cors({
    origin: true,
    credentials: true
}));


router.get('/teams', fetchTeams); 
router.get('/teams/:id', fetchTeam); 
router.post('/teams', createTeam); 
router.put('/teams/:id', updateTeam); 
router.delete('/teams/:id', deleteTeam); 

module.exports = router;
