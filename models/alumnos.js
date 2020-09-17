const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const alumno = sequelize.define('alumno',{
    ID_ALUMNO:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    NOMB_ALUMNO:{
        type: DataTypes.STRING(50)
    },

    APEL_ALUMNO:{
        type: DataTypes.STRING(100)
    },
    
    USER_ALUMNO:{
        type: DataTypes.STRING(20)
    },

    PASS_ALUMNO:{
        type: DataTypes.STRING(30)
    },

    DNI_ALUMNO:{
        type: DataTypes.STRING(8)
    },

    CORREO_ALUMNO:{
        type: DataTypes.STRING(25)
    },

    CEL_ALUMNO:{
        type: DataTypes.STRING(9)
    },
    NIVEL_USUARIO:{
        type: DataTypes.INTEGER
    }
},

{
    timestamps: false,
    tableName:'ALUMNOS'
});




module.exports=alumno;