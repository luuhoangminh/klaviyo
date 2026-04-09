import { test, expect } from '@playwright/test';
import { OrdersListPage } from '../helpers/orders-list.page';
import { Helper } from '../helpers/utils.helper';
import { ORDERS_LIST_PAGE } from '../config/env';

const filesMissingColumn = [
    { file: 'data/test-miss-Address.xlsx', missingColumn: 'Address' },
    { file: 'data/test-miss-Brand.xlsx', missingColumn: 'Brand' },
    { file: 'data/test-miss-CustomerType.xlsx', missingColumn: 'CustomerType' },
    { file: 'data/test-miss-Email.xlsx', missingColumn: 'Email' },
    { file: 'data/test-miss-OrderAmount.xlsx', missingColumn: 'OrderAmount' },
    { file: 'data/test-miss-OrderDate.xlsx', missingColumn: 'OrderDate' },
    { file: 'data/test-miss-OrderId.xlsx', missingColumn: 'OrderId' },
    { file: 'data/test-miss-OrderQty.xlsx', missingColumn: 'OrderQty' },
    { file: 'data/test-miss-OrderSource.xlsx', missingColumn: 'OrderSource' },
    { file: 'data/test-miss-OrderStatus.xlsx', missingColumn: 'OrderStatus' },
    { file: 'data/test-miss-OrderType.xlsx', missingColumn: 'OrderType' },
    { file: 'data/test-miss-PhoneNumber.xlsx', missingColumn: 'PhoneNumber' },
    { file: 'data/test-miss-ProductName.xlsx', missingColumn: 'ProductName' },
];


test.describe('CREATE NEWS (AUTHENTICATED)', () => {
    // Tăng timeout của test lên 3 phút vì quá trình import có thể mất nhiều thời gian
    test.setTimeout(1800000);

    test.beforeEach(async ({ page }) => {
        const orders = new OrdersListPage(page);
        await orders.goto();
    });

    test('Import đơn hàng thành công', async ({ page }) => {
        const news = new OrdersListPage(page);
        await news.importFile('data/import-test-64.xlsx');

        // ===== VERIFY =====
        await expect(news.importSuccessText).toBeVisible();
        await expect(news.importSuccessText).toHaveText(/64/);
    });
    
    test('Import thiếu cột template', async ({ page }) => {
        const news = new OrdersListPage(page);
        for (const { file, missingColumn } of filesMissingColumn) {
            await news.importFile(file);

            await expect(news.importFailedText).toBeVisible();
            await expect(news.importFailedText).toHaveText(new RegExp(missingColumn));
            await news.importDoneButton.click();
        }
    });

    test('Import khác format file', async ({ page }) => {
        const news = new OrdersListPage(page);
        // ===== IMPORT FILE =====
        await news.importFile('data/test-format-txt.txt');

        // ===== VERIFY =====
        await expect(news.importFailedText).toBeVisible();
        await expect(news.importFailedText).toHaveText(/.xlsx, .xls/);
    });
});