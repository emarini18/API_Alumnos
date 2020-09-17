const router = require('express').Router();
const Sedes = require('../../models/sedes');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await Sedes.findAll();
    res.json(user);
});

module.exports=router;