const add = function(n1,n2) {
	return n1+n2
};

const subtract = function(n1,n2) {
	return n1-n2
};

const sum = function(arr) {
	return arr.reduce((prod,curr) => prod + curr ,0)
};

const multiply = function(arr) {
  return arr.reduce((prod,curr) => prod*curr, 1)
};

const power = function(n1,n2) {
	return n1**n2;
};

const factorial = function(n1) {
  fac=1
	for (let i=1; i<=n1; i++){
    fac*=i
  }
  return fac
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
