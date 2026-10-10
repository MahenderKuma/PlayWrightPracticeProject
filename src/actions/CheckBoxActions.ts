
import { Locator } from "@playwright/test";
import { LocatorFactory } from "./LocatorFactory";
export class CheckBoxActions {

    private locator!: Locator;
    private description!: string;

 public setCheckBox(selector:string|Locator,description:string):CheckBoxActions{
  this.locator=typeof selector==='string'?LocatorFactory.getLocator(selector):selector;
  this.description=description;
  return this;
}
    public async check():Promise<void>{
        if(await this.locator.isChecked()){
            console.log(`Checkbox ${this.description} is already checked.`);
        }else{
            await this.locator.check();
            console.log(`Checkbox ${this.description} is now checked.`);
        }
    }

    public async uncheck():Promise<void>{
        if(await this.locator.isChecked()){
            await this.locator.uncheck();
            console.log(`Checkbox ${this.description} is now unchecked.`);
        }else{
            console.log(`Checkbox ${this.description} is already unchecked.`);
        }
    }

    public async isChecked():Promise<boolean>{
        return await this.locator.isChecked();
    }
}