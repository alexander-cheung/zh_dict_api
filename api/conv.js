const OpenCC = require('opencc-js');
const converter = OpenCC.Converter({ from: 'cn', to: 'hk' });

module.exports = (req, res) => {
	let text = "";
	if (req.method === "GET" && req.query.text)
        text = converter(req.query.text);

	res.json(text);
}