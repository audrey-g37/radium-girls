const dropdownEL = document.getElementById('dropdown-menu');
const codeEl = document.getElementById('code-text-input');
const errorText = document.getElementById('error-text');
const winText = document.getElementById('win-text');
const loseText = document.getElementById('lose-text');

const roomCodes = [
	{ room: 1, code: 1961 },
	{ room: 2, code: 1926 },
	{ room: 3, code: 6473 },
	{ room: 4, code: 9647 }
];

let room = dropdownEL.value;

function selection() {
	const newRoomChoice = dropdownEL.value;
	room = newRoomChoice;
}

function displayError() {
	loseText.style.display = 'none';
	winText.style.display = 'none';
	errorText.style.display = 'block';
}

function compareCode(code) {
	const correctCode = roomCodes.find((codeTest) => codeTest.room == room).code;
	if (code == correctCode) {
		loseText.style.display = 'none';
		winText.style.display = 'block';
	} else {
		winText.style.display = 'none';
		loseText.style.display = 'block';
	}
}

function checkAnswer() {
	if (codeEl.value.length !== 4) return displayError();
	else {
		errorText.style.display = 'none';
		compareCode(codeEl.value);
	}
	codeEl.value = '';
}
