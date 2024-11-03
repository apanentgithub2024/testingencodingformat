function encode(text = "") {
	const array = text.split("").map(char => char.codePointAt(0));
	const result = [];
	for (let i = 0; i < array.length; i++) {
		let random = Math.floor(Math.random() * array[i]);
		result.push(array[i] - random, random);
	}
	result.reverse();
	for (let i = 1; i < result.length; i++) {
		result[i] = result[i] + i;
	}
	return result;
}
function decode(result = []) {
	for (let i = 1; i < result.length; i++) {
		result[i] = result[i] - i;
	}
	result.reverse();
	let string = "";
	for (let i = 0; i < result.length; i += 2) {
		string = string + String.fromCodePoint(result[i] + result[i + 1]);
	}
	return string;
}
