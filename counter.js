export function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0);
}

export const decreaseBtn = document.querySelector('.decrease-btn');
export const resetBtn = document.querySelector('.reset-btn');
export const increaseBtn = document.querySelector('.increase-btn');

export const counterAppDisplay = document.querySelector('.counter-app-display');

export let count = 0;
