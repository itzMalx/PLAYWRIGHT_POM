import { test, expect } from '../fixtures/baseFixture';
import { DashboardPage } from '../pages/DashboardPage';
import loginData from '../test-data/loginData.json';
test.describe('Login Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    test.afterEach(async ({ dashboardPage }) => {
        await dashboardPage.logoutbtn();
    });
    test('Verify Quick Launch section', async ({ dashboardPage }) => {
        await expect(dashboardPage.quickLaunch).toBeVisible;
        await expect(dashboardPage.timeAtWorkCard).toBeVisible;
    });
});