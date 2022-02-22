const db = require('./db')

const Post = db.sequelize.define('postagens',{
    id: {
        type: db.Sequelize
    },
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT

    }
});

module.exports = Post;

