import { Page } from '@playwright/test';
import { FileUploadUtils } from "../utils/fileUploadUtils";
import { RandomListUtils } from '../utils/randomListUtils ';
import { ElementSelectors } from '../selectors/selectorsProducts';

export interface ICreateProductPage {
    goto(): Promise<void>;
    enterUsername(username: string): Promise<void>;
    enterPassword(password: string): Promise<void>;
    buttonSignIn(): Promise<void>;
    buttonNorthwind(): Promise<void>;
    buttonNewProduct(): Promise<void>;
    enterProductName(productName: string): Promise<void>;
    buttonSupplier(): Promise<void>;
    buttonCategory(): Promise<void>;
    selectRandomElement(locator: string): Promise<void>;
    buttonSave(): Promise<void>;
    enterSearch(productName: string): Promise<void>;
    buttonRefresh(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    product(module: string, productName: string, filePath: string): Promise<void>;
}

export class CreateProductPage implements ICreateProductPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto('https://demo.serenity.is/');
    }

    async enterUsername(username: string): Promise<void> {
        await this.page.fill(ElementSelectors.usernameInput, username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.page.fill(ElementSelectors.passwordInput, password);
    }

    async buttonSignIn(): Promise<void> {
        await this.page.click(ElementSelectors.signInButton);
    }

    async buttonNorthwind(): Promise<void> {
        await this.page.getByTitle('StartSharp').hover();
        await this.page.click(ElementSelectors.northwindButton);
    }

    async buttonNewProduct(): Promise<void> {
        await this.page.click(ElementSelectors.newProductButton);
    }

    async enterProductName(productName: string): Promise<void> {
        await this.page.fill(ElementSelectors.productNameInput, productName);
    }

    async buttonSupplier(): Promise<void> {
        await this.page.click(ElementSelectors.supplierButton);
    }

    async buttonCategory(): Promise<void> {
        await this.page.click(ElementSelectors.categoryButton);
    }

    async selectRandomElement(locator: string): Promise<void> {
        const element = await RandomListUtils.getRandomElement(this.page, locator);
        await element.click();
    }

    async buttonSave(): Promise<void> {
        await this.page.click(ElementSelectors.saveButton);
    }

    async enterSearch(productName: string): Promise<void> {
        await this.page.fill(ElementSelectors.searchInput, productName);
    }

    async buttonRefresh(): Promise<void> {
        await this.page.click(ElementSelectors.refreshButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.buttonSignIn();
        await this.buttonNorthwind();
    }

    async product(module: string, productName: string, filePath: string): Promise<void> {
        const moduleLocator = ElementSelectors.moduleLocator(module);
        await this.page.locator(moduleLocator).click();
        await this.buttonNewProduct();
        await this.enterProductName(productName);
        await FileUploadUtils.uploadFile(this.page, ElementSelectors.fileLabel, filePath);
        await this.buttonSupplier();
        await this.selectRandomElement(ElementSelectors.locatorList);
        await this.buttonCategory();
        await this.selectRandomElement(ElementSelectors.locatorList);
        await this.buttonSave();
        await this.enterSearch(productName);
        await this.buttonRefresh();
    }
}