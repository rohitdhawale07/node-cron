// src/middlewares/errorHandler.js

/**
 * Express error-handling middleware.
 * @param {import('express').ErrorRequestHandler} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
    console.error('💥 Error:', err.message);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};

export default errorHandler;
