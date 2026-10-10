import { Page, Locator } from "@playwright/test";
import { LocatorFactory } from "./LocatorFactory";

export class UIActions {

   protected locator!: Locator;
   protected description1!: string;

   constructor(private readonly page: Page) {}

   public async navigateTo(url: string): Promise<void> {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
   }

   public getLocator(): Locator {
      return LocatorFactory.getLocator(this.locator);
   }

   public setLocator(selector:string|Locator,description:string):UIActions{
      this.locator=typeof selector==='string'?LocatorFactory.getLocator(selector):selector;
      this.description1=description;
      return this;
   }

   public async click(): Promise<void> {
      await this.locator.click();
      console.log(`Clicked on the element ${this.description1}`);
   }

   public  async hover(): Promise<void> {
      await this.locator.hover();
      console.log(`Hovered over the element ${this.description1}`);
   }

   public async isVisible(): Promise<boolean> {
      const visible = await this.locator.isVisible();
      console.log(`Element ${this.description1} visibility: ${visible}`);
      return visible;
   }

   public async getText(): Promise<string> {
      const text = await this.locator.textContent();
      console.log(`Text of the element ${this.description1}: ${text}`);
      return text || '';
   }

   public async getAttribute(attributeName: string): Promise<string | null> {
      const attributeValue = await this.locator.getAttribute(attributeName);
      console.log(`Attribute ${attributeName} of the element ${this.description1}: ${attributeValue}`);
      return attributeValue;
   }

   public async waitForVisibility(timeout: number = 5000): Promise<void> {
      await this.locator.waitFor({ state: 'visible', timeout });
      console.log(`Element ${this.description1} is now visible`);
   }

   public async getLocators(selector = '*'): Promise<Locator[]> {
      return await this.page.locator(selector).all();
   }
     public setElement(selector: string | Locator, description: string): UIActions {
      this.locator = typeof selector === 'string' ? LocatorFactory.getLocator(selector, this.page) : selector;
      this.description1 = description;
      return this;
   }
}
