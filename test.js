const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs, oneDollarIs, oneYenIs} = require("./app.js");

test("One euro should be 1.07 dollars", function () {
  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expectedEuro = 3.5 * oneEuroIs.USD;

  // Hago mi comparación (la prueba)
  expect(dollars).toBe(expectedEuro); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dolar should be 149.69 yen", function () {
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);
  
    // Si 1 dolar son 149.69 yen, entonces 3.5 dolares debe ser (3.5 * 149.69)
    const expectedDollar = 3.5 * oneDollarIs.JPY;
  
    // Hago mi comparación (la prueba)
    expect(yen).toBe(expectedDollar); // 1 dolar son 149.69 yen, entonces 3.5 dolares deberían ser = (3.5 * 149.69)
  });

  test("One yen should be 0.0052 pound", function () {
    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);
  
    // Si 1 yen son 0.0052 pound, entonces 3.5 yen debe ser (3.5 * 0.0052)
    const expectedYen = 3.5 * oneYenIs.GBP;
  
    // Hago mi comparación (la prueba)
    expect(pound).toBe(expectedYen); // 1 yen son 0.0052 pound, entonces 3.5 yen deberían ser = (3.5 * 0.0052)
  });

