export function getRedireactPath({type, avatar}) {
	let url = (type === 'boss') ? '/boss': '/genuis'
	if (!avatar) {
		url += '/info'
	}
	return url
}