const RegExt = /([1-9]\d*)?\.?\d{0,1}/

function picker(input) {
	let stringValue = typeof input === 'string' ? input : (input + '').toString()
	const matchResult = stringValue.match(RegExt)
	if (matchResult) {
		return matchResult[0]
	}
	return ''
}

module.exports = picker