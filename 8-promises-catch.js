import fs from 'fs/promises';

// BEGIN
export function touch(filePath) {
    return fs.access(filePath)
        .catch(() => fs.writeFile(filePath, ''));
}
// END
