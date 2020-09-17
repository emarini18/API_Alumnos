const { DataTypes, INTEGER } = require('sequelize');
const { sequelize } = require('../database/db');
const Profesor = require('./profesores');
const Horario = require('./horarios');
const Sede = require('./sedes');


const taller = sequelize.define('taller', {
    ID_TALLER: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    IMG_URL_TALLER: {
        type: DataTypes.STRING(200)
    },

    DESCRIP_TALLER: {
        type: DataTypes.STRING(100)
    },

    ID_PROFESOR: {
        type: DataTypes.INTEGER,
        references: {
            model: Profesor,
            key: 'fk_idprofesor'
        }
    },

    ID_HORARIO: {
        type: DataTypes.STRING(1),
        references: {
            model: Horario,
            key: 'ID_HORARIO'
        }
    },

    ID_SEDE: {
        type: DataTypes.INTEGER,
        references: {
            model: Sede,
            key: 'ID_SEDE'
        }
    },

    FECHA_TALLER: {
        type: DataTypes.DATEONLY,
    }
},

    {
        timestamps: false,
        tableName: 'TALLERES'
    });


taller.belongsTo(Profesor, { foreignKey: 'ID_PROFESOR' });
taller.belongsTo(Horario, { foreignKey: 'ID_HORARIO' });
taller.belongsTo(Sede, { foreignKey: 'ID_SEDE' });


module.exports = taller;
