import { test, expect } from '@playwright/test';
import { LoginPage } from '../helpers/login.page';
import { VALID_USER, INVALID_USER } from '../config/env';

test.describe('LOGIN FUNCTIONAL', () => {

    // Xác minh rằng người dùng sẽ có thể đăng nhập bằng 
    // tài khoản của họ bằng thông tin đăng nhập chính xác.
    test('TC_POS_01. Login với thông tin hợp lệ', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.login(VALID_USER.email, VALID_USER.password);

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('TC_POS_02. Login với thông tin hợp lệ (chữ hoa)', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.login((VALID_USER.email).toUpperCase(), VALID_USER.password);

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    // test('TC_POS_03. Login với thông tin hợp lệ (khoản trắng đầu cuối)', async ({ page }) => {
    //     const login = new LoginPage(page);
    //     await login.goto();

    //     await login.login(' ' + VALID_USER.email + ' ', VALID_USER.password);

    //     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    // });
    
    test('TC_POS_04. Login với phím Enter', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.email.fill(VALID_USER.email);
        await login.password.fill(VALID_USER.password);
        await page.keyboard.press('Enter');

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    // Xác minh thông tin đăng nhập của người dùng 
    // vẫn còn trên field input sau khi nhấp vào ghi nhớ 
    // và quay lại màn hình đăng nhập một lần nữa.
    // test('TC_POS_05. Remember me keeps credential', async ({ page }) => {
    //     const login = new LoginPage(page);
    //     await login.goto();

    //     await login.email.fill(VALID_USER.email);
    //     await login.password.fill(VALID_USER.password);
    //     await login.remember.check();
    //     await login.loginBtn.click();

    //     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    //     await page.locator('#userDropdown').click();
    //     await page.locator('.lpx-content-container').locator('#MenuItem_Account_Logout').click();
    //     // await page.reload();

    //     await expect(login.email).toHaveValue(VALID_USER.email);
    // });

    // Xác minh rằng người dùng đăng nhập bằng 
    // cách nhấn phím Enter sau khi nhập thông tin 
    // đăng nhập chính xác sẽ được chuyển hướng đến trang tổng quan.
    test('TC_POS_06. Login by Enter key', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.email.fill(VALID_USER.email);
        await login.password.fill(VALID_USER.password);
        await login.password.press('Enter');

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ không thể nhìn thấy mật khẩu của họ khi nhập vào trường mật khẩu.
    test('TC_POS_07. Password must be masked', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await expect(login.password).toHaveAttribute('type', 'password');
    });

    // Xác minh rằng người dùng có thể nhấp vào biểu tượng con mắt để hiển thị mật khẩu của họ.
    test('TC_POS_08. Eye icon toggles password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.eyeIcon.click();
        await expect(login.password).toHaveAttribute('type', 'text');
    });

    // Xác minh rằng người dùng sẽ không thể đăng nhập 
    // với thông tin đăng nhập thiếu password 
    // và sẽ nhận được thông báo lỗi phù hợp.
    test('TC_POS_09. Error when only email entered', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.email.fill(VALID_USER.email);
        await login.loginBtn.click();

        await expect(login.errorMsgPass).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ không thể đăng nhập 
    // với thông tin đăng nhập thiếu password 
    // và sẽ nhận được thông báo lỗi phù hợp.
    test('TC_POS_10. Error when entered', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.loginBtn.click();

        await expect(login.errorMsgUser).toBeVisible();
        await expect(login.errorMsgPass).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ không thể đăng nhập 
    // với thông tin đăng nhập không chính xác 
    // và sẽ nhận được thông báo lỗi phù hợp.
    test('TC_POS_11. Invalid credential error', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.email.fill(INVALID_USER.email);
        await login.password.fill(INVALID_USER.password);
        await login.loginBtn.click();

        await expect(login.errorMsg).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ không thể đăng nhập 
    // với username không hợp lệ 
    // và sẽ nhận được thông báo lỗi phù hợp.
    test('TC_POS_12. Error invalid email format', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.login(INVALID_USER.email, VALID_USER.password);

        await expect(login.errorMsg).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ không thể đăng nhập
    // với nội dung SQL Injection trong trường username hoặc password
    // và sẽ nhận được thông báo lỗi phù hợp.
    test('TC_POS_13. SQL Injection prevention', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.login("' OR 1=1 --", "anything");

        await expect(login.errorMsg).toBeVisible();
    });

    // Xác minh rằng người dùng sẽ bị giới hạn số lần đăng nhập thất bại
    // và sẽ nhận được thông báo lỗi phù hợp sau một số lần cố gắng đăng nhập không thành công.
    // test('TC_POS_14. Rate limit after multiple fail login', async ({ page }) => {
    //     const login = new LoginPage(page);
    //     await login.goto();

    //     for (let i = 0; i < 6; i++) {
    //         await login.login('wrong@test.com', 'wrong');
    //     }

    //     await expect(login.errorMsg).toContainText('Too many attempts');
    // });

    // Cần kiểm tra thêm nội dung thông báo lỗi để 
    // đảm bảo rằng nó phản ánh chính xác vấn đề 
    // với thông tin đăng nhập của người dùng.
});