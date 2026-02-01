import { chromium, expect, test } from '@playwright/test';

test.describe('FORM PAGE', () => { 
    test('Fill the form', async ({ page }) => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        await page.pause();
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        await page.locator('#name').fill('Viktor');
        await page.locator('#inputEmail4').pressSequentially("mike@example.com", {delay: 200})
        await page.locator("input[placeholder=Password]").fill("Test1234")
        await page.locator("[for=\"companyname\"] ~ input#company").fill("LambdaTest")
        await page.selectOption('select[name=\"country\"]', { label: 'United States' });
        await page.locator('label:has-text("City") ~ input#inputCity').fill('Orlando')
        await page.locator('label:has-text("Website") ~ input#websitename').fill('www.lambdatest.com')
        await page.getByPlaceholder('Address 1').fill('1234 Sample Street')
        await page.getByPlaceholder('Address 2').fill('1234 Sample Street')
        await page.getByRole('textbox', {name: "Zip Code"}).fill('32819')
        await page.getByRole('textbox', {name: "State"}).fill('Florida')
        await page.getByRole('button', {name: 'Submit'}).click();
        await expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()

        await page.pause()


    })
})