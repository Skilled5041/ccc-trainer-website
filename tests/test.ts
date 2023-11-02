import { expect, test } from "@playwright/test";

test("test", async ({page}) => {
    await page.goto("/");
	expect(1).toBe(1);
});
