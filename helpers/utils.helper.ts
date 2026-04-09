import { expect, Page } from '@playwright/test';

export class Helper {

  // Utility function to check if an array of strings is sorted in ascending order
  static isSortedAsc(arr: string[]) {
    return arr.every((v, i, a) =>
      !i || v.localeCompare(a[i - 1], undefined, { sensitivity: 'base' }) >= 0
    );
  }
  // Utility function to check if an array of strings is sorted in descending order
  static isSortedDesc(arr: string[]) {
    return arr.every((v, i, a) =>
      !i || v.localeCompare(a[i - 1], undefined, { sensitivity: 'base' }) <= 0
    );
  }

  // Function to verify if a column in a table is sorted in the specified order
  static async verifyColumnSorted(tableRows: any, columnIndex: number, type: 'asc' | 'desc') {
    const values = await tableRows.allTextContents();
    if (type === 'asc') {
      expect(this.isSortedAsc(values)).toBeTruthy();
    } else {
      expect(this.isSortedDesc(values)).toBeTruthy();
    }
  }

  // Utility function to generate random text of a specified length
  static async randomText(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }  
}