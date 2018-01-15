import { getApp } from './server.app';

import { enableProdMode } from '@angular/core';

enableProdMode();

const app = getApp();

app.listen(4200, () => {
	// tslint:disable-next-line:no-console
	console.log('Open http://localhost:4200');
});
