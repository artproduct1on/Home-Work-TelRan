

//closure - замикання 
function createCounter() {
	let count = 0;
	return function () {
		count += 1;
		return count;
	};
}

const counter = createCounter();
console.log(counter);
console.log(createCounter());
