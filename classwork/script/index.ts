interface User {
	name: string | "NoName";
	age: number;
	info: string | "NoInfo";
};
const users: User[] = [
	{ name: 'Дима', age: 17, info: 'Очень крутой дизайнер' },
	{ name: 'Петя', age: 18, info: 'Хорошо играет в игры' },
	{ name: 'Саша', age: 19, info: 'Хорошо играет в игры' },
];

function setConsol(arr: User[]): void {
	for (const { name, age, info } of arr) {
		const h = document.createElement("h2");
		const div = document.createElement("div");
		h.textContent = age >= 18 ? `${name} проходи!` : `${name} не проходи!`;
		div.textContent = info;
		document.body.append(h, div);
	};
};

setConsol(users);
