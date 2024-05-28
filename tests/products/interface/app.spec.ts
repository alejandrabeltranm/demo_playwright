import { test, expect } from '@playwright/test';
import { user } from '../data/users.data';
import { ElementSelectors } from '../selectors/selectorsProducts';
import { TestSetup } from '../hooks/testSetup';

test('Successfully created product', async ({ page }) => {
    const setup = new TestSetup(page);
    
    await setup.productCreate.goto();
    await setup.productCreate.login(user.username, user.password);
    await setup.productCreate.product(setup.selectModule.module, setup.randomProductName, setup.filePath);

    await setup.assertions.assertElementContainsText(page, ElementSelectors.validationNameProduct, setup.resultRandomProductName);
});