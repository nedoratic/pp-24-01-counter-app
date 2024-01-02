const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

const counterAppDisplay = document.querySelector('.counter-app-display');

let count = 0;

const decrease = () => {
	count--;
	counterAppDisplay.textContent = count;
};

decreaseBtn.addEventListener('click', decrease);

const reset = () => {
	count = 0;
	counterAppDisplay.textContent = count;
};

resetBtn.addEventListener('click', reset);

const increase = () => {
	count++;
	counterAppDisplay.textContent = count;
};

increaseBtn.addEventListener('click', increase);
