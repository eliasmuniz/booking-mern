
  function errorHandler(err, req, res, next) {
    console.log('errorHandler');
    console.error(error);
    res.status(500).json({ message: error.message, stack: error.stack });
    next(err);
  }
  
  function boomErrorHandler(err, req, res, next) {
    // identificamos si el error es de tipo boom
    if(err.isBoom){
      const {output}=err;
      res.status(output.statusCode).json(output.payload);
    }
    next(err);
  }
  
export  { errorHandler, boomErrorHandler };
  