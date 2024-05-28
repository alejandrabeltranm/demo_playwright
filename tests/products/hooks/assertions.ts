import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { CreateProductPage } from '../interface/ui.interface';

export class Assertions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async assertElementContainsText(page, locator, expectedText) {
        const productCreate = new CreateProductPage(page);
        await page.waitForSelector(locator);
        await productCreate.buttonRefresh(); 
        const cellContent = await page.$eval(locator, el => el.textContent);
        expect(cellContent).toContain(expectedText);
    } 
}