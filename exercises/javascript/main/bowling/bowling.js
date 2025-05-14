export function bowl(totalRolls) {
  let score = 0;
  for (let roll = 0; roll < totalRolls.length; roll += 2) {
    let frame = totalRolls[roll] + totalRolls[roll + 1];
    if (frame === 10) {
      frame += totalRolls[roll + 2];
    }
    score += frame;
  }
  return score;
}
