function randomColor() {
 	return (Math.floor(Math.random() * 256));
}

function randomRGB() {
	var col = 'RGB(';
	for (let i = 1; i < 3; i++) {
		col += randomColor() + ',';
		}
	col += randomColor() + ')';
	return col;
}