let mysql = require('mysql2');

let usuarios = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name
});

usuarios.connect((err) => {
    if (err) {
        console.error('Erro ao tentar conexão com o banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados USUARIOS.')
})

module.exports = usuarios;