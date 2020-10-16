const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
	// write your solution here
	console.log(expr.length);
	let str = '';

	let res = [];
	let temp = '';
	for (let i = 0; i <= expr.length; i++) {
		if (i % 10 == 0 && i !== 0) {
			res.push(temp);
			temp = '';
			temp = expr.charAt(i);
		} else {
			temp += expr.charAt(i);
		}
	}
	res.map((elem, index) => {
		let strTemp = ''
		for (let i = 0; i <= elem.length; i++) {
			let substr = elem.substring(i, i + 2)
			i++
			switch (substr) {
				case '00':
					strTemp += ''
					break;
				case '10':
					strTemp += '.'
					break;
				case '11':
					strTemp += '-'
					break;
				case '**':
					strTemp += '**'
					break;
				default:
					break;
			}
		}
		if (strTemp === '**********') {
			str += ' '
		} else {
			str += MORSE_TABLE[strTemp]
		}
	})
	return str

}

module.exports = {
    decode
}