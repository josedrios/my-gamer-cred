// random integer generator between range
export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randColor() {
  return `hsl(${rand(0,360)}, 50%, 50%)`
}