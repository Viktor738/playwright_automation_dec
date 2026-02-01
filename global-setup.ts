// import { FullConfig, chromium } from "@playwright/test";

// async function globalSetup(config: FullConfig) {
//     const browser = await chromium.launch();
//      const context = await browser.newContext();
//      const page = await context.newPage();

//      //Perform authentication steps
//     await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded' });
//     await page.getByPlaceholder('UserName').fill('Testtuser');
//     await page.getByPlaceholder('Password').fill('Testpasswordq123!');
//     await page.getByRole('button', { name: 'Login' }).click();

//     await page.waitForURL('https://demoqa.com/profile');

//     const user = await page.locator('#userName-value').innerText();
//     if (user !== 'Testtuser') {
//         throw new Error('Authentication failed during global setup');
// }
//    await context.storageState({ path: './.auth/user.json' });
//     await browser.close();
// }

// export default globalSetup;