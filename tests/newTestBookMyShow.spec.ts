import { test } from '@playwright/test';
import { SignInPage } from '../src/pages/signInPage';
import { PageActions } from '../src/actions/PageActions';

test('user can login', async ({ page, context }) => {
  const pageActions = new PageActions(page, context);
  const loginPage = new SignInPage(pageActions);
  await loginPage.navigateToLogin();
  await loginPage.signInBtnOnHeader();
 
});