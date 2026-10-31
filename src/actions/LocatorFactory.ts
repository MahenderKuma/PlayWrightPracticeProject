import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../fixtures/pageFixture";

export class LocatorFactory {

    private static get page(): Page {
        if(!pageFixture || !pageFixture.page){
            throw new Error("Page fixture is not set. Please ensure that the page fixture is initialized before using LocatorFactory.");
        }
        return pageFixture.page;
    }

    public static getLocator(input:string|Locator, page?: Page): Locator {
      if (typeof input !== 'string') {
        return input;
      }
      return (page ?? this.page).locator(input);
    }

   public static getLocatorByTestId(testid: string | RegExp): Locator {
    return this.page.getByTestId(testid);
}

public static getLocatorByText(
    text: string | RegExp,
    options?: { exact?: boolean }): Locator {
    return this.page.getByText(text, options);  
}


public static getLocatorByLabel(
    label: string | RegExp,
    options?: { exact?: boolean }
): Locator {
    return this.page.getByLabel(label, options);     


}


public static getLocatorByPlaceholder(placeholders: string | RegExp,options?: { exact?: boolean }): Locator {
    return this.page.getByPlaceholder(placeholders, options);  
} 

public static getLocatorByAltText(
    altText: string | RegExp,
    options?: { exact?: boolean }
): Locator {
    return this.page.getByAltText(altText, options);  
}

public static async getAllLocators(input: string | Locator): Promise<Locator[]> {
  return typeof input === 'string' ? await this.page.locator(input).all() : await input.all();  

}

}

