// updates dict.json from a given cedict file in the directory
const fs = require('fs');
const readline = require('readline');
async function processLineByLine() {
  const fileStream = fs.createReadStream('cedict_ts.u8');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let dict = {};
  for await (const line of rl) {
    if (line[0] != "#") {
  	  let pinyin = line.substring(line.indexOf("["), line.indexOf("]") + 1);
  	  let key = line.substring(0, line.indexOf(" "));
  	  let def = line.substring(line.indexOf("/") + 1, line.length - 1).replace(/ *\[[^\]]*]/g, '');
  	  dict[key] = pinyin + " " + def;
    }
  }
	fs.writeFileSync("dict.json", JSON.stringify(dict));
}
processLineByLine();