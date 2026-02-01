import { expect, FrameLocator, test } from '@playwright/test';

test.describe("Iframe Handling", () => {
    test('Iframe handling example', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames')

        // Get outer frame (frame-bottom)
        const frameBottom: FrameLocator = page.frameLocator('[name="frame-bottom"]');

        // Get text content from outer frame
        const leftFrameText: string | null = await frameBottom.frameLocator('[name="frame-left"]').locator('body').textContent()

         const middleFrameText: string | null = await frameBottom.frameLocator('[name="frame-middle"]').locator('body').textContent()

        const rightFrameText: string | null = await frameBottom.frameLocator('[name="frame-right"]').locator('body').textContent()

        console.log('Left Frame Text:', leftFrameText);
        console.log('Middle Frame Text:', middleFrameText);
        console.log('Right Frame Text:', rightFrameText);

        // assertions
         expect(leftFrameText).toContain('Left');
         expect(middleFrameText).toContain('Middle');
         expect(rightFrameText).toContain('Right');

    })
})