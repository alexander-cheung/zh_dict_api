module.exports = (req, res) => {
	let lists = {};
	if (req.method === "GET" && req.query.lists) {
		let HSK = [];
		let combine = false;

		try {
			HSK = JSON.parse(req.query.lists);
			combine = req.query.combine ? JSON.parse(req.query.combine): false;
		} catch {
			res.json("Parsing Error");
			return;
		}

		for (var category of HSK) {
			if (Number.isInteger(category) && category <= 6 && category >= 1) {
				let list = require(`../HSK_Vocab/HSK${category}.json`);
				let key = "HSK_" + category;
				if (combine) {
					Object.assign(lists, list);
				} else {
					lists[key] = list;					
				}
			} else {
				res.json("Error: Invalid Input");
				return;
			}
		}
	} 
	res.json(lists);
}