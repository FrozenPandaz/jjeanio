import 'zone.js/dist/zone-node.js';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist-server/main.bundle.js');

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as path from 'path';

export function getApp() {
	const app = express();

	const distPath = path.join(__dirname, '../dist');
	const srcPath = path.join(__dirname, '../src');
	const indexPath = path.join(distPath, './index_.html');
	const staticPath = path.join(srcPath, './index_.html');

	app.engine('html', ngExpressEngine({
		bootstrap: AppServerModuleNgFactory,
		providers: [
			provideModuleMap(LAZY_MODULE_MAP)
		]
	}));

	app.use(express.static(distPath, {
		index: false
	}));

	const routes = [
		'/'
	];
	routes.forEach(route => {
		app.get(route, (req, res) => {
			const index = req.query.static ? staticPath : indexPath;
			res.render(index, {
				req,
				res
			});
		});
	});

	return app;
}
