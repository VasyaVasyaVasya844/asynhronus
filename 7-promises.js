import fs from 'fs/promises';

// BEGIN
export function reverse(filePath) {
    return fs.readFile(filePath, 'utf-8')
        .then(data => {
            const reversedContent = data.split('\n').reverse().join('\n');
            return fs.writeFile(filePath, reversedContent);
        });
}
// END
