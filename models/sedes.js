const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const sede = sequelize.define('sede',{
    ID_SEDE:{
        type: DataTypes.INTEGER,
        primaryKey: true   
    },
    DESCRIP_SEDE:{
        type: DataTypes.STRING(100)
    },
    IMG_SEDE:{
        type: DataTypes.STRING(200)
    }
},

{
    timestamps: false,
    tableName:'SEDE'
});

module.exports=sede;