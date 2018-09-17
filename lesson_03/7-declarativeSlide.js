const SLIDE = {
	title: 'react is Declerative'
	bullets: [
		"Imperitive VS Declerative",
		"The browser API aren't fun to work with",
		"React allows us to write what we want",
	],
}

function createSlide(slide) {
	return (
		<div>
			<h1>SLIDE.title</h1>
			<ul>
				{SLIDE.bullets.map(bullet => <li>{bullet}</li>}
			</ul>
		</div>
	)
}
