import { test } from "@playwright/test"
import { DragAndDrop } from "../page-object/dragAndDrop";

test.describe('DATE PICKER', () => {
    test('Drag and Drop Element', async ({ page }) => {
        const dragAndDrop = new DragAndDrop(page); 
    // Navigate to the drag and drop page
    const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo';
    await page.goto(url);

    // Perform drag and drop
    await dragAndDrop.dragAndDropElement('Draggable 1')
    await dragAndDrop.dragAndDropElement('Draggable 2')

    await page.reload()

    await dragAndDrop.dragAndDropElement('Draggable 1')
    await dragAndDrop.dragAndDropElement('Draggable 2')

})
})