var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
  level: { type: Number, min: 0, max: 100 },
  location: String,
  member: Boolean

});

userSchema.pre('update', function(next){
  this.updated_at = new Date();
  next();
});

var User = mongoose.model('User', userSchema);


module.exports = User;
