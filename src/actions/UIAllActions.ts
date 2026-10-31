import { Locator } from "@playwright/test";
import { UIActions } from "./UIActions";
import { CheckBoxActions } from "./CheckBoxActions";
import { EditBoxActions } from "./EditBoxActions";
import { DropDownActions } from "./DropDownActions";
import { PageActions } from "./PageActions";

export class UIAllActions {

    private readonly elementAction: UIActions;
    private readonly checkBoxActions: CheckBoxActions;
    private readonly editBoxAction: EditBoxActions;
    private readonly dropDownActions: DropDownActions;
    private readonly pageActions: PageActions;

    constructor(actions: PageActions) {
        const page = actions instanceof PageActions ? actions.getPage() : actions;
        this.elementAction = new UIActions(page);
        this.checkBoxActions=new CheckBoxActions();
        this.editBoxAction=new EditBoxActions();
        this.dropDownActions=new DropDownActions();
        this.pageActions=actions;;
    }

   public checkbox(selector:string|Locator,description:string){
    return this.checkBoxActions.setCheckBox(this.elementAction.setElement(selector, description).getLocator(),description);
   }

   public editbox(selector:string|Locator,description:string){
    return this.editBoxAction.setInputBox(this.elementAction.setElement(selector, description).getLocator(),description);
   }

   public dropdown(selector:string|Locator,description:string){
    return this.dropDownActions.setDropDown(this.elementAction.setElement(selector, description).getLocator(),description);
   }

   public checkBox(selector:string|Locator,description:string){
    return this.checkBoxActions.setCheckBox(this.elementAction.setElement(selector, description).getLocator(),description);
   }

  public element(selector: string | Locator, description: string) {
    return this.elementAction.setElement(selector, description).getLocator();
  }

   public page(){
    return this.pageActions;
   }
}