var mysql = require('mysql');
var connectMYSQL = function() {
    console.log("agora sim estou conectado no mysql");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo'
    });
};
module.exports = function(){
    return connectMYSQL;
};
