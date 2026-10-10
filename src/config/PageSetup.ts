import { test as base } from "@playwright/test";
import { UIActions } from "../actions/UIActions";
import { setPageFixture } from "../fixtures/pageFixture";

type FrameworkFixtures={
    actions: UIActions;
};

export const testFixtures = base.extend<FrameworkFixtures>({
    actions: async ({page,context,browser},use)=>{
        // initialize page-level actions and fixtures
    
        setPageFixture(browser, context, page);
        const actions = new UIActions(page);
        await use(actions);
    }
});

export {expect} from "@playwright/test";