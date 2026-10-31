import { Locator } from "@playwright/test";

export class DropDownActions {

    private locator!: Locator;
    private description!: string;



    public async selectOption(value:string):Promise<void>{
        await this.locator.selectOption(value);
        console.log(`Selected the option ${value} from the dropdown ${this.description}`);
    }

    public async getSelectedOption():Promise<string>{
        const selectedOption=await this.locator.inputValue();
        console.log(`Selected option from the dropdown ${this.description} is: ${selectedOption}`);
        return selectedOption;
    } 

    public setDropDown(locator:Locator,description:string):DropDownActions{
        this.locator=locator;
        this.description=description;
        return this;
    }

    public async selectByLabel(label:string):Promise<void>{
        await this.locator.selectOption({ label: label });
        console.log(`Selected the option with label ${label} from the dropdown ${this.description}`);
    }
    
    public async selectByIndex(index:number):Promise<void>{ 
            await this.locator.selectOption({ index: index });
            console.log(`Selected the option at index ${index} from the dropdown ${this.description}`);
    }

    public async getAllOptions():Promise<string[]>{
        const options=await this.locator.locator('option').allTextContents();
        console.log(`All options from the dropdown ${this.description} are: ${options}`);
        return options;
    }
    public async getSelectedValue():Promise<string>{
        const selectedValue=await this.locator.inputValue();
        console.log(`Selected value from the dropdown ${this.description} is: ${selectedValue}`);
        return selectedValue;
    }

}