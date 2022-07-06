var dict = require("../dict.json");

module.exports = (req, res) => {
	let defs = [];
	if (req.method === "GET" && req.query.words) {
		let words = "";
		let pinyin = false;
		try {
			words = JSON.parse(req.query.words);
			pinyin = req.query.pinyin ? JSON.parse(req.query.pinyin): false;
		} catch {
			res.json("Parsing Error");
			return
		}

		for (var word of words) {
			let def = dict[word];

			if (word && def) {
				if (pinyin) {
					defs.push(def);
				} else {
					def = def.substring(def.indexOf("]") + 2);
					defs.push(def);
				}
			} else {
				if (pinyin && typeof(word) == "string") {
					let flag = false;
					let parts = [];
					for (char of word) {
						if (dict[char]) {
							let part = dict[char];
							parts.push(part.substring(part.indexOf("[") + 1, part.indexOf("]")));
						} else {
							flag = true;
							break;
						}
					}
					pinyinStr = flag ? null : `[${parts.join(" ")}]`;
					defs.push(pinyinStr);
				} else {
					defs.push(null);
				}
			}
		}
	} 
	res.json(defs);
}