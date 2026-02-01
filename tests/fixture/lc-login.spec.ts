import {test, expect} from './lc-login'

test('User lands on profile after login', async ({ loggedInPage }) => {
    await expect (loggedInPage).toHaveURL(/.*\/profile\//);
    console.log("Current \"URL\" : ", loggedInPage.url())
    await expect (loggedInPage.locator('.me-2 ~ h1')).toContainText('Viktor Rykun');
})