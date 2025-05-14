import { bowl } from "../../main/bowling/bowling";
describe("Bowling tests", () => {
  test("Rename me", () => {
    //arrange
    const rolls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    //act
    expect(bowl(rolls)).toBe(0);
    //assert
  });
  test("Rename me", () => {
    //arrange
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    //act
    expect(bowl(rolls)).toBe(20);
    //assert
  });
});
