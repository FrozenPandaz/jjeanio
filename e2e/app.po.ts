import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('jj-root h1')).getText();
	}

	getSidenavVisibility() {
		return element(by.css('jj-root mat-sidenav')).getCssValue('visibility');
	}

	clickMenuButton() {
		return element(by.css('jj-root jj-header button')).click();
	}

	clickBackdrop() {
		return element(by.css('jj-root mat-sidenav-container .mat-drawer-backdrop')).click();
	}
}
