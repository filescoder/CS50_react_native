function map(arr, fn) {
	const newArr = []	

	arr.forEach(function(val) {
		newArr.push(fn(val))
	})	

	return newArr
}

function filter(arr, fn) {
	const newArr = []
	
	arr.forEach(function(val) {
		if (fn(val)) newArr.push(val)
	})	

	return newArr
}

function reduce(arr, fn) {
	let result = 0;
	arr.forEach(function(val, index) {
		result = fn(val, result)
	})
	return result
}

function addOne(num) { return num + 1 }
function isLessThanTwo(num) {  return num < 2 } 
function add(x, y) { return x + y }
const x = [0, 1, 2, 3]

result1 = map(x, addOne)
result2 = filter(x, isLessThanTwo)
result3 = x.filter(isLessThanTwo)
result4 = x.reduce(add)
result5 = reduce(x, add)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4) 
console.log(result5)
