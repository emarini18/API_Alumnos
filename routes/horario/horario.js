const router = require('express').Router();
const Horario = require('../../models/horarios');

require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await Horario.findAll();
    res.json(user);
});

module.exports=router;