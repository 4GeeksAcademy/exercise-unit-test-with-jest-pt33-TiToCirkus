const { fromEuroToDollar, oneEuroIs} = require("./app.js");

test("One euro should be 1.07 dollars", function () {
  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 3.5 * oneEuroIs.USD;

  // Hago mi comparación (la prueba)
  expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
