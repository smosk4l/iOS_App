import { shuffleArray } from "../../utils/arrayUtils";

describe("shuffleArray", () => {
  it("should shuffle the array in place", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];

    shuffleArray(array);

    expect(array).not.toEqual(originalArray);
  });

  it("should return the shuffled array", () => {
    const array = [1, 2, 3, 4, 5];

    const shuffledArray = shuffleArray(array);

    expect(shuffledArray).toHaveLength(array.length);
    expect(shuffledArray.sort()).toEqual(array.sort());
  });
});
