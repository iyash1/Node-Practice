//Create an empty variable named exports of the type module.exports
var exports = module.exports = {};

// Add functions
exports.AddNumber = function(a,b)
{
  return a+b;
  // return the value of sum of a and b
}

exports.SubtractNumber = function(a,b)
{
  return a-b;
  // return the value of sum of a and b
}

exports.MultiplyNumber = function(a,b)
{
  return a*b;
  // return the value of sum of a and b
}

exports.DivideNumber = function(a,b)
{
  if (b === 0 || isNaN(b)) {
        return null;
  }
  else {
        return a/b;
  }
}
