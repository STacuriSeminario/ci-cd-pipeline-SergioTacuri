const { suma } = require('../src/index');

describe('Funciones de cálculo', () => {
  test('suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

  test('suma con negativos', () => {
    expect(suma(-2, -3)).toBe(-5);
  });

  test('suma con cero', () => {
    expect(suma(0, 5)).toBe(5);
  });

  test('suma de strings numéricos', () => {
    expect(suma(Number('4'), Number('1'))).toBe(5);
  });

  test('suma con valores NaN', () => {
    expect(suma(Number('a'), 2)).toBeNaN();
  });
});
