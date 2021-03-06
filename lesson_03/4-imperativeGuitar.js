const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
	const head = createElement('head')
	for (let i = 0; i < 6; i++) {
		const peg = createElement('peg')
		head.append(peg)
	}
	
	const neck = createElement('neck')
	for (let i = 0; i < 19; i++) {
		const fret = createElement('fret')
		neck.append(fret)
	}
	
	const body = createElement('body')
	string.forEach(tone => {
		const string = createElement('string')
		string.tune(tone)
		body.append(string)
	})

	return body
}
