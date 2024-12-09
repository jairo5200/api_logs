const {ValidationError} = require('sequelize');


  //funcion que imprime en consola el error que se presente
  function logErrors (err, req, res, next) {
    console.error(err);
    next(err);
  }
  
  //funcion que detecta si el error es del servidor
  function errorHandler(err, req, res, next) {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }
  
  //funcion que detecta si el error es de tipo boom
  function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    } else {
      next(err);
    }
  }
  
  //funcion que detecta si el error se genera en el ORM
  function ormErrorHandler(err ,req,res, next){
    if(err instanceof ValidationError){
      res.status(409).json({
        statusCode: 409,
        message: err.name,
        errors: err.errors,
      });
    }
    else{
      next(err);
    }
  }
  
  // exportamos las funciones para implementarlas en el archo main de la api
  module.exports = {logErrors,errorHandler,boomErrorHandler,ormErrorHandler}
  