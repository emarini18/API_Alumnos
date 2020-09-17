const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');


const horario = sequelize.define('horario',{
    ID_HORARIO:{
        type: DataTypes.STRING(1),
        primaryKey: true   
    },
    DESCR_HORARIO:{
        type: DataTypes.STRING(150)
    }
},

{
    timestamps: false,
    tableName:'HORARIOS'
});

module.exports=horario;
