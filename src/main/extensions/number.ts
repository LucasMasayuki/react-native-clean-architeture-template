declare global {
  interface Number {
    betweeen(min: number, max: number): number
  }
}

Number.prototype.betweeen = function betweeen(
  this: number,
  min: number,
  max: number,
): number {
  return Math.floor(this * (max - min) + min)
}

export {}
