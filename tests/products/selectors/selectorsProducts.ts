export namespace ElementSelectors {
    export const usernameInput = 'input[name="Username"]';
    export const passwordInput = 'input[name="Password"]';
    export const signInButton = 'button[type="submit"]';
    export const northwindButton = '//*[@id="nav_menu1_2"]/li[1]/a/span';
    export const newProductButton = 'div.tool-button.add-button.icon-tool-button';
    export const productNameInput = 'input[name="ProductName"]';
    export const fileLabel = 'input[type="file"]';
    export const supplierButton = '#select2-chosen-4';
    export const categoryButton = '#select2-chosen-5';
    export const saveButton = 'div.tool-button.save-and-close-button.icon-tool-button';
    export const searchInput = '#ProductGrid0_QuickSearchInput';
    export const refreshButton = 'div.tool-button.refresh-button.icon-tool-button.no-text';
    export const moduleLocator = (module: string) => `//a/span[text()="${module}"]`;
    export const locatorList = '//*[@role="listbox"]/li';
    export const validationNameProduct = '.slick-cell:nth-child(2)';
}