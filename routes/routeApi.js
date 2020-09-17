
const router = require('express').Router();
const routeProfesor=require('../routes/profesor/profesor');
const routeSede=require('../routes/sedes/sede');
const routeHorario=require('../routes/horario/horario');
const routerTaller=require('../routes/Taller/taller');
const routerAlumno=require('../routes/alumno/alumno');

// Enviar a user.js cuando tengan la direccion '/api/user'
router.use('/profesor',routeProfesor);
router.use('/sede',routeSede);
router.use('/horario', routeHorario);
router.use('/alumnos', routerAlumno);
router.use('/talleres',routerTaller)

module.exports=router;

