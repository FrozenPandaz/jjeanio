const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, './dist');
const indexPath = path.join(distPath, './index_.html');

const html = fs.readFileSync(indexPath).toString();

const domino = require('domino');

const document = domino.createDocument(html);

const { from } = require('rxjs/observable/from');

from(document.body.querySelectorAll('script'))
	.subscribe(script => {
		script.defer = true;
		document.head.appendChild(script)
	});

fs.writeFileSync(indexPath, document.outerHTML);
console.log('Done Post Processing');
