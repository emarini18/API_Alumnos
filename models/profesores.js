const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');


const profesor = sequelize.define('profesor',{
    ID_PROFESOR:{
        type: DataTypes.INTEGER,
        primaryKey: true   
    },
    DATOS_PROFESOR:{
        type: DataTypes.STRING(150),
     }
},

{
    timestamps: false,
    tableName:'PROFESOR'
});

module.exports=profesor;

