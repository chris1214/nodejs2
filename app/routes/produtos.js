module.exports = function(app) {
    app.get('/produtos', function(req,res){
        console.log("testando");
        var connection = app.infra.connectionFactory();

    connection.query('select * from livros', function(erros,resultados){
      res.render('produtos/lista', {lista:resultados});
    });
    connection.end();
  });
};
