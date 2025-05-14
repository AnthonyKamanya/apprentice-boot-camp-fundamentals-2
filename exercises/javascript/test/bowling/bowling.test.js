import { bowl } from "../../main/bowling/bowling";
describe("Bowling tests", () => {
  test("should the score 0 when all frames is 0", () => {
    //arrange
    const rolls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    //act
    expect(bowl(rolls)).toBe(0);
    //assert
  });
  test("should the score 20 when all frames is 1", () => {
    //arrange
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    //act
    expect(bowl(rolls)).toBe(20);
    //assert
  });
  test("should the score 12 when there is a spare", () => {
    //arrange
    const rolls = [1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //act
    expect(bowl(rolls)).toBe(12);
    //assert
  });
});
