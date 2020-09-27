const router = require('express').Router();
const Profesor = require('../../models/profesores');

require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await Profesor.findAll();
    res.json(user);
});

module.exports=router;