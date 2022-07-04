dict = require("../dict.js")

module.exports = (req, res) => {
	if (req.method === "GET") {
		let defs = []
		for (var word of req.query.words) {
			if (word) {
				let def = dict.dict[word];
				if (def) {
					defs.push(def);
				} else {
					defs.push(null);
				}
			}
		}
		console.log(defs);
	} 
}