var dict = require("../dict.json");

module.exports = (req, res) => {
	let defs = [];
	if (req.method === "GET" && req.query.words) {
		let words = "";
		let addPinyin = false;
		try {
			words = JSON.parse(req.query.words);
			addPinyin = req.query.pinyin ? JSON.parse(req.query.pinyin): false;
		} catch {
			res.json("Parsing Error");
			return
		}

		for (var word of words) {
			let def = null;
			let pinyin = "";

			if (dict[word]) {
				let defStart = dict[word].indexOf("]");
				let pinyinStart = dict[word].indexOf("[");

				if (defStart != -1 && pinyinStart != -1) {
					def = dict[word].substring(defStart + 2);
					pinyin = dict[word].substring(pinyinStart + 1, defStart);
				}
			}

			let card = def ? {"def": def} : null;
			
			if (addPinyin) {
				if (pinyin) {
					card.pinyin = pinyin;
				} else if (typeof word === "string") {
					let flag = false;
					let parts = [];
					for (char of word) {
						if (dict[char]) {
							let part = dict[char];
							let begin = part.indexOf("[");
							let end = part.indexOf("]");

							if (begin === -1 || end === -1) {
								flag = true;
								break;
							}

							parts.push(part.substring(begin + 1, end));
						} else {
							flag = true;
							break;
						}
					}

					pinyinStr = flag ? null : `${parts.join(" ")}`;

					if (card) {
						card.pinyin = pinyinStr;
					} else if (pinyinStr) {
						card = {"pinyin": pinyinStr}
					}

				}
			}

			defs.push(card);
		}
	} 
	res.json(defs);
}