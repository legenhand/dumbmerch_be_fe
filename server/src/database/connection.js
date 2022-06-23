const Sequelize = require("sequelize");
const db = {};
const {database, username, password, host, port, dialect} = require('../../config/config.json').development;


const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    logging: console.log,
    freezeTableName: true,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

db.sequelize = sequelize;

module.exports = db;