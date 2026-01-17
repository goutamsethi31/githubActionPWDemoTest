import {test,expect} from"@playwright/test";

test("GitHub Action Test",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const title=await page.title();
    expect(title).toBe("Demo Web Shop");

    const productTitle= await page.locator(".product-title").first().textContent();
    console.log(`First product title: ${productTitle}`);

    expect(productTitle).toContain("$25 Virtual Gift Card");
    
});
