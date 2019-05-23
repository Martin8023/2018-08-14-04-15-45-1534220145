// Write your cade below:
module.exports = function main(x,y) {
  // console.log(x+" "+y);
  if (x == null || y == null) return -1;
  if(y == 0) return -1;

  // console.log(x%y);
  return x%y;
};