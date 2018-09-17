const SLIDE = {
	title: 'react is Declerative'
	bullets: [
		"Imperitive VS Declerative",
		"The browser API aren't fun to work with",
		"React allows us to write what we want",
	],
}

function createSlide(slide) {
	const slideElement = document.createElement('div')
	
	const title = document.createElement)'h1')
	title.innerHTML = SLIDE.title	

	return slideElement
}
