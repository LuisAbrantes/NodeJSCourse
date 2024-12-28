const Sequelize = require('sequelize');

// MySQL database connection
const sequelize = new Sequelize('postapp', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
