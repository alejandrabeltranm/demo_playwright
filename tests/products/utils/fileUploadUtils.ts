import { Page } from '@playwright/test';

import * as path from 'path';
export namespace PathUtils {
    export function getAbsolutePath(relativePath: string): string {
        return path.resolve(process.cwd(), relativePath);
    }
}

export namespace FileUploadUtils {
    export async function uploadFile(page: Page, selector: string, filePath: string): Promise<void> {
        const inputFile = await page.$(selector);
        if (inputFile) {
            await inputFile.setInputFiles(filePath);
        } else {
            throw new Error(`Selector not found: ${selector}`);
        }
    }
}