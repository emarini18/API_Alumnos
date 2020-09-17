const router = require('express').Router();
const Talleres = require('../../models/talleres');
const Profesor=require('../../models/profesores');
const Horario=require('../../models/horarios');
const Sedes=require('../../models/sedes');
const { Op } = require("sequelize");


router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await Talleres.findAll();
    res.json(user);
});

router.get('/all', async(req, res)=>{
    const user = await Talleres.findAll({ 
        include: [Profesor, Horario, Sedes]
    });
    res.json(user);
})

router.get('/all/:id', async(req, res)=>{
    const user = await Talleres.findAll({ 
        include: [Profesor, Horario, Sedes],
        where: {
            ID_TALLER: {
                [Op.eq]: req.params.id
            }
        }
    });
    res.json(user);



})

module.exports=router;