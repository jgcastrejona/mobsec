module.exports = function(req, res, next) {
	if(req.user[0].tipo == 'Admin'){
		return next();
    } else {
        return res.forbidden();   		
    }
};