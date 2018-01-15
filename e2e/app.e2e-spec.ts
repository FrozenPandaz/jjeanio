import { browser, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';

describe('jjeanio App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual(`Welcome to Jason Jean's Website`);
	});

	it('should expand the sidenav after clicking the menu button', async (done: DoneFn) => {
		await page.clickMenuButton();
		await browser.sleep(750);
		expect(page.getSidenavVisibility()).toBe('visible');
		done();
	});

	it('should collapse the sidenav after clicking the backdrop', async (done: DoneFn) => {
		await page.clickBackdrop();
		await browser.sleep(750);
		expect(page.getSidenavVisibility()).toBe('hidden');
		done();
	});
});
