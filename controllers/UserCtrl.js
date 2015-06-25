
var User = require('../models/User');

module.exports = {
  create: function(req, res){
    User.create(req.body, function(err, response){
      if(err) return res.status(500).json(err);
      else return res.json(response);
    });
  }
}
