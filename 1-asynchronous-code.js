import fs from 'fs';
import { promisify } from 'util';

// BEGIN
const readFile = promisify(fs.readFile);

export default async function print(filePath) {
    try {
        const data = await readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}
// END

