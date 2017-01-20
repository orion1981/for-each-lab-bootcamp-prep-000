function iterativeLog(array) {
array.forEach(function(element, index) {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  var animals = ['merlin', 'fuji', 'daisy']
  animals.forEach(callback)
  return animals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
