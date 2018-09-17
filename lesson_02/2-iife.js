const sayHello = (function makeHelloFunction() {
	const message = 'Hello!'

	function sayHello() {
		console.log(message)
	}	

	return sayHello
})()

