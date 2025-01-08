function sortFunktion() {

	const array = Array.from(arguments);

	if (array.length <= 1) {
		return array;
	};

	const center = array[Math.floor(array.length / 2)];
	const left = [];
	const right = [];
	const equal = [];

	for (let num of array) {
		if (num < center) {
			left.push(num);
		} else if (num > center) {
			right.push(num);
		} else {
			equal.push(num);
		}
	};

	return [...sortFunktion(...left), ...equal, ...sortFunktion(...right)];
};

const sortedArray = sortFunktion(5, 2, 9, 1, 5, 6, 1798, 22, 54, 0, 3);
console.log(sortedArray);

let word = "hello"
console.log(word.split("").reverse().join(""))