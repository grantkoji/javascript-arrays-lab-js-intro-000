var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newkittens = [...kittens, name]
  return newkittens
}

function prependKitten(name) {
  var newkittens = [name, ...kittens]
  return newkittens
}

function removeLastKitten(name) {
  var newkittens = kittens.slice(0, kittens.length - 1)
  return newkittens
}

function removeFirstKitten(name) {
  var newkittens = kittens.slice(1)
  return newkittens
}
