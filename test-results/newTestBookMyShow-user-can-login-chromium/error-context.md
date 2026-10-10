# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: newTestBookMyShow.spec.ts >> user can login
- Location: tests/newTestBookMyShow.spec.ts:5:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { PageActions } from "../actions/PageActions";
  2  | import { UIAllActions } from "../actions/UIAllActions";
  3  | 
  4  | const BOOKMYSHOW_URL = 'https://parabank.parasoft.com/parabank/index.html';
  5  | export class SignInPage{
  6  |     private ui:UIAllActions;
  7  |      private readonly pageReadySelector = 'body';
  8  | 
  9  | 
  10 | 
  11 |     constructor(actions:PageActions){
  12 |         this.ui=new UIAllActions(actions);
  13 |        
  14 |     }
  15 | 
  16 |      /**
  17 |    * Navigate to login page
  18 |    */
  19 |   public async navigateToLogin(): Promise<void> {
  20 |        await this.ui.page().gotoURL(BOOKMYSHOW_URL, 'BookMyShow home page');
  21 |     await this.ui.page().getPage().waitForLoadState('domcontentloaded');
  22 |     await this.ui.page().getPage().waitForSelector(this.pageReadySelector, { state: 'visible' });
  23 |    
  24 |   }
  25 |   
  26 | 
  27 |   public async signInBtnOnHeader(): Promise<void> {
  28 |     await this.navigateToLogin();
  29 |       await this.ui.page().getPage().waitForLoadState('domcontentloaded');
  30 |     await this.ui.page().getPage().getByRole('link', { name: 'Register' }).click();
  31 |     
  32 |     // const signInButton = this.ui.element(
  33 |     //   'button[aria-label="Sign in"]',
  34 |     //   'Sign in Button'
  35 |     // );
> 36 |          await this.ui.page().getPage().waitForTimeout(5000);
     |                                         ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  37 |     await this.ui.page().getPage().getByRole('button', { name: 'Sign in' }).click();
  38 |      await this.ui.page().getPage().waitForTimeout(5000);
  39 | 
  40 |   }
  41 | }
  42 | 
  43 | 
  44 |   
  45 | 
```