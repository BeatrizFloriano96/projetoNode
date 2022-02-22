const Sequelize = require('sequelize');

//Conexção com o banco de dados
    const sequelize = new Sequelize('blog','root','905070',{
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}