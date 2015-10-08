

//create new 'render controller method

exports.render = function(req,res) {
    // Use the 'response' objec to render the 'index view
    res.render('index', {title: 'Todo Application'});
};