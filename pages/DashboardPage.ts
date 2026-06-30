import { Page, Locator } from '@playwright/test';
export class DashboardPage {
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly quickLaunch: Locator;
    readonly timeAtWorkCard: Locator;
    readonly profileMenu:Locator;
    readonly logout:Locator;
    constructor(page: Page) {
        this.page = page;
        this.dashboardTitle = page.locator('h6');
        this.quickLaunch = page.getByText('Quick Launch');
        this.timeAtWorkCard = page.getByText('Time at work');
        this.profileMenu=page.locator("//span[@class='oxd-userdropdown-tab']");
        this.logout=page.locator("//a[normalize-space()='Logout']");
    }
    async logoutbtn(){
        await this.profileMenu.click();
        await this.logout.click();
    }
}