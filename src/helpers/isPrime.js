const easyChek = (x) => {
  if (x === 2 || x === 3) {
    return true;
  }
  if (x < 2 || (x % 2 === 0)) {
    return false;
  }

  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = (x) => ((easyChek(x) === false) ? 'no' : 'yes');

// END
export default prime;
