var plantuml = require('node-plantuml');
var fs = require('fs');

var gen = plantuml.generate("Architecture.md");
gen.out.pipe(fs.createWriteStream("Architecture.png"));
