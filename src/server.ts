import { getApp } from './server.app';

import { enableProdMode } from '@angular/core';

enableProdMode();

const app = getApp();

app.listen(4200, () => {
  console.log('Open http://localhost:4200');
});
