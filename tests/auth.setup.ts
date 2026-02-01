// import {test as setup, expect} from '@playwright/test';

// const authFile = './.auth/user.json';

// setup('authenticate', async ({ page }) =>  {
    
//     await page.goto('https://demoqa.com/login');
//     await page.getByPlaceholder('UserName').fill('Testtuser');
//     await page.getByPlaceholder('Password').fill('Testpasswordq123!');
//     await page.getByRole('button', { name: 'Login' }).click();

//     await page.waitForURL('https://demoqa.com/profile');
//     await expect(page.locator('#userName-value')).toHaveText('Testtuser');

//     await page.context().storageState({ path: authFile });
// });