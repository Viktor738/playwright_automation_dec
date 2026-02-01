
import {test as base, chromium, Page} from '@playwright/test';
import { DatePicker } from './date-picker'; // Adjust the path as necessary

export const test = base.extend<{
    datePicker: DatePicker
}>({
    datePicker: async ({page}, use) => {
        await use(new DatePicker(page));
    }
})

