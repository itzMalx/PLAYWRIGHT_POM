import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';
test.describe('Login Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    test('logout', async ({ dashboardPage, loginPage }) => {
        await dashboardPage.logoutbtn();
        await expect(loginPage.loginTitle)
            .toHaveText('Login');
    });
});