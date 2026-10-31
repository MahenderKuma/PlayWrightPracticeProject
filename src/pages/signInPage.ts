import { PageActions } from "../actions/PageActions";
import { UIAllActions } from "../actions/UIAllActions";
import { AssertUtils } from "../assertions/AssertUtils";

const BOOKMYSHOW_URL = 'https://tutorialsninja.com/demo/';
export class SignInPage{
    private ui:UIAllActions;
     private readonly pageReadySelector = 'body';
     private readonly assertUtils: AssertUtils;



    constructor(actions:PageActions){
        this.ui=new UIAllActions(actions);
        this.assertUtils = new AssertUtils();
    }

     /**
      * 
   * Navigate to login page
   */
  public async navigateToLogin(): Promise<void> {
       await this.ui.page().gotoURL(BOOKMYSHOW_URL, 'BookMyShow home page');
   
  }
  

  public async signInBtnOnHeader(): Promise<void> {
     await this.ui.page().getPage().locator(`span:has-text("My Account")`).click();
     await this.ui.page().getPage().getByRole('link', { name: 'Login' }).first().click();
     const newCustomerText = await this.ui.page().getPage().getByRole('heading', { name: 'New Customer', level: 2 }).innerText();
     console.log('New Customer text:', newCustomerText);
    await AssertUtils.assertEquals(newCustomerText, 'New Customer', 'Verify New Customer text is displayed');
  
  }
}
