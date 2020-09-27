const jwt = require('jsonwebtoken');
const secret = require('../config/config');

function validarPassword (passwordBody, passwordDB) {
    if (passwordBody === passwordDB) {
        return true;
    } else {
        return false;
    }
}


function verifyToken (req, res, next){

    const token = req.headers['authorization'].split(" ")[1];

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'Token no contenido'
        });
    }

    const decifrarToken = jwt.verify(token, secret);
    req.userId = decifrarToken.id;
    next();
}


module.exports = {
    validarPassword,
    verifyToken
};
