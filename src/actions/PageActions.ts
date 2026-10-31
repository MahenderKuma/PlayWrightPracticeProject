import { BrowserContext, Page } from "playwright/test";





export class PageActions {

   private page:Page;
   private context:BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
   
  }
   public getPage(): Page {
      return this.page;
   }

   public async gotoURL(url: string, description = 'target URL'): Promise<void> {
      void description;
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
   }

   public async SwitchToDefaultPage():Promise<void>{
      const pages = this.context.pages();
      if (pages.length > 0) {
        await pages[0].bringToFront() ;
        this.page=pages[0];
       
      }else{
         throw new Error("No pages found in the context.");
      }
    }

    public async switchToLastOpenedPage():Promise<void>{
      const pages = this.context.pages();
      if (pages.length > 1) {
         const lastPage=pages[pages.length - 1];
         await lastPage.bringToFront();
         this.page=lastPage;
   
      }else{
         throw new Error("No additional pages found in the context.");
      }
     
    }

    public async switchToPageByIndex(index:number):Promise<void>{
      const pages = this.context.pages();
      if (index >= 0 && index < pages.length) {
         const targetPage=pages[index];
         await targetPage.bringToFront();
         this.page=targetPage;
      }else{
         throw new Error(`Invalid page index: ${index}. There are only ${pages.length} pages.`);
      }
    } 

    public async switchToFrameByIndex(frameIndex:number):Promise<void>{
      const frames = this.page.frames();
      if (frameIndex >= 0 && frameIndex < frames.length) {
         const targetFrame=frames[frameIndex];
         this.page=targetFrame.page();
       
      }else{
         throw new Error(`Invalid frame index: ${frameIndex}. There are only ${frames.length} frames.`);
      }
    }

    public async closeCurrentTab():Promise<void>{

      const pages = this.context.pages();
      if (pages.length > 1) {
         await this.page.close();
         const remainingPages = this.context.pages();
         const lastPage = remainingPages[remainingPages.length - 1];
         await lastPage.bringToFront();
         this.page=lastPage;
      } else {
         throw new Error("Cannot close the last remaining tab.");
      }
    }

    public async resizeWindow(width:number,height:number):Promise<void>{
      await this.page.setViewportSize({ width, height });
    }



}