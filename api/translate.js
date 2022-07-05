var fs = require('fs');
var file = fs.readFileSync('dict.txt').toString().split("\n");
var dict = {};

for (line of file) {
	if (line[0] != "#") {
		let key = line.slice(0, line.indexOf("/"));
		let value = line.slice(line.indexOf("/") + 1);
		dict[key] = value;
	}
}

module.exports = (req, res) => {
	let defs = [];
	if (req.method === "GET" && req.query.words) {
		words = JSON.parse(req.query.words);
		for (var word of words) {
			if (word) {
				let def = dict[word];
				if (def) {
					defs.push(def);
				} else {
					defs.push(null);
				}
			}
		}
		res.json(defs);
	} 
}