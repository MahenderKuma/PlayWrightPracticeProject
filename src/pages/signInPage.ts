import { PageActions } from "../actions/PageActions";
import { UIAllActions } from "../actions/UIAllActions";

const BOOKMYSHOW_URL = 'https://in.bookmyshow.com/explore/home/secunderabad';
export class SignInPage{
    private ui:UIAllActions;
     private readonly pageReadySelector = 'body';



    constructor(actions:PageActions){
        this.ui=new UIAllActions(actions);
       
    }

     /**
   * Navigate to login page
   */
  public async navigateToLogin(): Promise<void> {
       await this.ui.page().gotoURL(BOOKMYSHOW_URL, 'BookMyShow home page');
    await this.ui.page().getPage().waitForLoadState('domcontentloaded');
    await this.ui.page().getPage().waitForSelector(this.pageReadySelector, { state: 'visible' });
   
  }
  

  public async signInBtnOnHeader(): Promise<void> {
      await this.ui.page().getPage().waitForLoadState('domcontentloaded');
    await this.ui.page().getPage().getByRole('link', { name: 'Register' }).click();
    await this.ui.page().getPage().getByRole('button', { name: 'Sign in' }).click();
  

  }
}


  
