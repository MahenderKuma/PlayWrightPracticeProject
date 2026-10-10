import { Locator } from "@playwright/test";

export class EditBoxActions{

    protected locator!: Locator;
    protected description!: string;

    public setInputBox(selector:Locator,description:string):EditBoxActions{
        this.locator=selector;
        this.description=description;
        return this;
    }

    public setEditBox(selector:Locator,description:string):EditBoxActions{
        this.locator=selector;
        this.description=description;
        return this;
    }

    public async fill(value:string):Promise<void>{
        await this.locator.fill(value);
        console.log(`Filled the edit box ${this.description} with value: ${value}`);
    }

    public async clear():Promise<void>{
        await this.locator.fill('');
        console.log(`Cleared the edit box ${this.description}`);
    }

    public async getValue():Promise<string>{
        const value=await this.locator.inputValue();
        console.log(`Value of the edit box ${this.description} is: ${value}`);
        return value;
    }
}