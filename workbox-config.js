module.exports = {
	globDirectory: 'simple-calculator/',
	globPatterns: [
		'**/*.{css,json,png,svg,html,js}'
	],
	swDest: 'simple-calculator/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};