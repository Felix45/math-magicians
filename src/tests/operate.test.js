import operate from '../logic/operate';

describe('Tests on operate.js arithmetic operations ', () => {
  test('Test multiply 20 * 30 to get 600', () => {
    const product = operate(20, 30, 'x');
    expect(product).toBe('600');
  });

  test('Test add 25 + 3000 to get 3025', () => {
    const product = operate(25, 3000, '+');
    expect(product).toBe('3025');
  });

  test('Test subtract 25 - 3000 to get -2975', () => {
    const product = operate(25, 3000, '-');
    expect(product).toBe('-2975');
  });

  test('Test divide 3000 ÷ 25 to get 250', () => {
    const product = operate(3000, 12, '÷');
    expect(product).toBe('250');
  });

  test('Test modulus 3000 % 25 to get 250', () => {
    const product = operate(3000, 12, '%');
    expect(product).toBe('0');
  });
});
