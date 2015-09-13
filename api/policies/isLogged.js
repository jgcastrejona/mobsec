module.exports = function(req, res, next) {
    if(req.isAuthenticated()) {
    	if (req.user[0].tipo == 'Admin') {
    		res.redirect('/panel')
    	}
    	else{
    		res.redirect('/dashboard')
    	}
    } else {
        return next();
    }
};