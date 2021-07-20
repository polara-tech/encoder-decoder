var alpha = [" ", ":", ",", ".", "!", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ":", ",", ".", "!", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

readline = require('readline'). createInterface({
	input: process. stdin,
	output: process. stdout
})

readline.question("ENCODE OR DECODE: ", answer => {
	if(answer == "ENCODE") {
		readline.question("Message: ", message => {
			var char = []
			var loe = []
			var noe = []
			var print = ''
			var num = ''
			char = message.split('')
			for(let i = 0; i < char.length; i++) {
				var number = Math.floor(Math.random() * 30)
				var charect1 = alpha[alpha.indexOf(char[i]) + number]
				loe.push(charect1)
				noe.push(number)
			}
			for(let j = 0; j < loe.length; j++) {
				print = print + loe[j]
				num = num + noe[j] + '-'
			}
			console.log(print)
			console.log(num)
		});
	} else if(answer == "DECODE") {
		readline.question("Message: ", message => {
			readline.question("Number Code: ", numberCode => {
				var numsplit = []
				var char = []
				numsplit = numberCode.split('-')
				char = message.split('')
				numsplit.splice(numsplit.length-1, numsplit.length-1)
				for(var index = 0; index < char.length; index++) {
					var number2 = numsplit[index]
					var charect2 = alpha[alpha.indexOf(char[index]) + 31 - number2]
					delete char[index]
					char[index] = charect2
				}
				var print = ''
				for(let j = 0; j < char.length; j++) {
					print = print + char[j]
				}
				console.log(print)
			});
		});
	}
});