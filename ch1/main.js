const sum = (a) => {
  if (typeof a === 'string') {
    return a.split(',').map(Number).reduce((acc, curr) => acc + curr, 0);
  }
  if (typeof a === 'number') {
    return a;
  }
  throw new Error('Invalid input: expected a string or a number');
}

const assertEquals = (expected, actual) => {
  if (expected !== actual) {
    throw new Error(`Expected ${expected}, but got ${actual}`);
  }
}

const check = (name, fn) => {
  try {
    fn();
    console.log(`${name} passed`);
  } catch (error) {
    console.error(`${name} failed: ${error.stack}`);
  }
}

check('sum with 2 numbers should sum them up', () => {
  const result = sum('1, 2');
  assertEquals(3, result);
});

check('sum with multiple digit numbers should sum them up', () => {
  const result = sum('10, 20');
  assertEquals(30, result);
});