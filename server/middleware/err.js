module.exports = function() {
    return function (err, req, res, next) {
        console.log('Erro na função',err.mensage);
        res.status(500);
    };
};