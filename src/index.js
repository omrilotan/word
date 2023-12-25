start();

function start() {
	// Actors
	const template = document.querySelector("template");
	const wordContainer = document.querySelector("h1");
	const button = document.querySelector("button");

	// Aquire words
	const text = [...template.content.childNodes].reduce(
		(text, { textContent }) => [text, textContent].join(" "),
		"",
	);
	const words = text
		.split(/\s+/)
		.map((word) => word.trim())
		.filter(Boolean);

	// Add behavior
	const randomise = () =>
		(wordContainer.innerText = words[Math.floor(Math.random() * words.length)]);
	button.addEventListener("click", randomise);
	randomise();
}
