const router = require('express').Router();
const Alumnos = require('../../models/alumnos');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

router.get('/', async (req, res) => {
    // Recuperar todos los  valores
    const user = await Alumnos.findAll();
    res.json(user);
});

// Méotdo Registrarse
router.post('/registrar', async (req, res, next) => {

    const { nombre, apellido, username, password,
        dni, email, celular } = req.body;

    const alumnito = await Alumnos.create({
        NOMB_ALUMNO:nombre, 
        APEL_ALUMNO:apellido, 
        USER_ALUMNO:username, 
        PASS_ALUMNO:password,
        DNI_ALUMNO:dni,
        CORREO_ALUMNO:email, 
        CEL_ALUMNO:celular
    },{
        fields:['NOMB_ALUMNO', 'APEL_ALUMNO','USER_ALUMNO',
        'PASS_ALUMNO','DNI_ALUMNO','CORREO_ALUMNO','CEL_ALUMNO']
    });


    const payload = {
        "id":alumnito.USER_ALUMNO
    }

    // Token
    const token = jwt.sign( 
        { id: payload.id }, 
        config.secret,
        { 
            expiresIn: 60 * 60 * 24 } //Tiempo duracion 01 token
        );

    // Enviar status y valor del token
    res.json( {
        auth:true,
        token
    });

    // res.json(alumnito);
    console.log(payload);
});

router.post('/login', async (req, res, next) => {
    res.json('login');
});

router.get('/profile', async (req, res, next) => {

    // Obtener el token que llega en la cabezera
    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(401).json({
            auth:false,
            message:'Token no contenido'
        });
    }

    const decifrarToken = jwt.verify( token, config.secret );
    console.log(decifrarToken);

    res.json('profile');
})


module.exports = router;

