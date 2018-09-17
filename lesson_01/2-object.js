const o = new Object()
o.firstName = "Nicola"
o.lastName = "Fabiani"
o.isTeaching = false
o.greet = function() {
	console.log('Hi!')
}
o['greet']()
