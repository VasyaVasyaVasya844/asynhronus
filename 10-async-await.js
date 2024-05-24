import fs from 'fs/promises';

// BEGIN
export async function exchange(filePath1, filePath2) {
    const content1 = await fs.readFile(filePath1, 'utf-8');
    const content2 = await fs.readFile(filePath2, 'utf-8');
    await Promise.all([
        fs.writeFile(filePath1, content2),
        fs.writeFile(filePath2, content1)
    ]);
}
// END
