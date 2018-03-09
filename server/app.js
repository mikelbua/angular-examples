/* Ejemplo para levantar un servidor web con NODEJS */

var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    recetas = require("./recetas.json"),
    methodOverride = require("method-override");
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();


/**
 * Listado Recetas
 */
router.get('/receta/', function(req, res) {  
   res.status(200).json(recetas);
});

/**
 * Detalla Receta
 */
router.get('/receta/:id', function(req, res) {  
  
   var id = req.params.id;
   console.log(`receta = ${id}`); 
   let receta = recetas[id];
   
   res.status(200).json(receta );
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});