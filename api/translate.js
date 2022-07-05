var dict = require("../dict.json");

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
	} 
	res.json(defs);
}