export function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0);
}

const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

const counterAppDisplay = document.querySelector('.counter-app-display');

let count = 0;
