// const isSour = (beverage) => (beverage === "lemonade" ? true : false);

// describe関数 同じ関数のテストで異なる結果を評価する場合などにを利用できる
// describe("#isSour", () => {
//   test("lemonade is sour", () => {
//     expect(isSour("lemonade")).toBe(true);
//   });

//   it("cola is not sour", () => {
//     expect(isSour("cola")).toBe(false);
//   });
// });

const getBeverage = (age) => {
  const beverages = [
    { name: "cola", alcohol: false },
    { name: "lemonade", alcohol: false },
    { name: "beer", alcohol: true },
  ];

  const filterdBeverages =
    age >= 20 ? beverages : beverages.filter((b) => b.alcohol === false);

  const seed = Math.floor(Math.random() * Math.floor(filterdBeverages.length));

  console.log(seed);
  return filterdBeverages[seed];
};

describe("#getBeverage", () => {
  const spy = jest
    .spyOn(Math, "random")
    .mockImplementationOnce(() => 0.7)
    .mockImplementationOnce(() => 0);

  const adult = 20;

  // すべてのテストが終了したタイミングで実行される
  afterAll(() => {
    spy.mockRestore(); // Math.random関数をオリジナルの関数へ戻す
  });

  test("return beer when age is 20", () => {
    expect(getBeverage(adult).name).toBe("beer");
  });

  it("return cola when age is 20", () => {
    expect(getBeverage(adult).name).toBe("cola");
  });
});
