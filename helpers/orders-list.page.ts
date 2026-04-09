import { Page, Locator, expect } from '@playwright/test';
import { ORDERS_LIST_PAGE } from '../config/env';
import { BasePage } from './base.page';
import path from 'path';

export class OrdersListPage extends BasePage{
    readonly importButton: Locator;
    readonly downloadTemplateImportButton: Locator;
    readonly importFileInput: Locator;
    readonly cancelImportButton: Locator;
    readonly confirmImportButton: Locator;
    readonly importPhaseProgress: Locator;
    readonly importSuccessText: Locator;
    readonly importFailedText: Locator;
    readonly exportButton: Locator;
    readonly exportDateFromInput: Locator;
    readonly exportDateToInput: Locator;
    readonly cancelExportButton: Locator;
    readonly confirmExportButton: Locator;
    readonly importDoneButton: Locator;
    readonly searchInput: Locator;
    readonly dateFromInput: Locator;
    readonly dateToInput: Locator;
    readonly searchButton: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;

        this.importButton = page.locator(ORDERS_LIST_PAGE.importButton);
        this.downloadTemplateImportButton = page.locator(ORDERS_LIST_PAGE.downloadTemplateImportButton);
        this.importFileInput = page.locator(ORDERS_LIST_PAGE.importFileInput);
        this.cancelImportButton = page.locator(ORDERS_LIST_PAGE.cancelImportButton);
        this.confirmImportButton = page.locator(ORDERS_LIST_PAGE.confirmImportButton);
        this.importPhaseProgress = page.locator(ORDERS_LIST_PAGE.importPhaseProgress);
        this.importSuccessText = page.locator(ORDERS_LIST_PAGE.importSuccessText);
        this.importFailedText = page.locator(ORDERS_LIST_PAGE.importFailedText);
        this.exportButton = page.locator(ORDERS_LIST_PAGE.exportButton);
        this.exportDateFromInput = page.locator(ORDERS_LIST_PAGE.exportDateFromInput);
        this.exportDateToInput = page.locator(ORDERS_LIST_PAGE.exportDateToInput);
        this.cancelExportButton = page.locator(ORDERS_LIST_PAGE.cancelExportButton);
        this.confirmExportButton = page.locator(ORDERS_LIST_PAGE.confirmExportButton);
        this.importDoneButton = page.locator(ORDERS_LIST_PAGE.importDoneButton);
        this.searchInput = page.locator(ORDERS_LIST_PAGE.searchInput);
        this.dateFromInput = page.locator(ORDERS_LIST_PAGE.dateFromInput);
        this.dateToInput = page.locator(ORDERS_LIST_PAGE.dateToInput);
        this.searchButton = page.locator(ORDERS_LIST_PAGE.searchButton);
    }

    async goto() {
        await super.goto(ORDERS_LIST_PAGE.url);
    }
    
    async importFile(linkFile: string) {
        await this.importButton.click();

        await expect(this.importFileInput).toBeVisible();

        // ===== UPLOAD FILE =====
        await this.page.setInputFiles(ORDERS_LIST_PAGE.importFileInput, path.resolve(linkFile));

        // ===== SUBMIT =====
        await this.confirmImportButton.click();

        // ===== WAIT FOR IMPORTING =====
        // await this.waitForData(ORDERS_LIST_PAGE.apiUrl);
        await this.importPhaseProgress.waitFor({ state: 'hidden', timeout: 1200000 });
    }
}