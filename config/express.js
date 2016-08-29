var express = require("express");
var load = require("express-load");
console.log("teste");
module.exports = function(){

  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

   load('routes',{cwd: 'app'})
      .then('infra')
      .into(app);
    return app;
  };
