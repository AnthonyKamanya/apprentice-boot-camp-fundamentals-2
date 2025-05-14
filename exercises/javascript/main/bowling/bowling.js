export function bowl(array) {
  let sumOfRolls = 0;
  array.forEach((element) => {
    sumOfRolls += element;
  });
  return sumOfRolls;
}
