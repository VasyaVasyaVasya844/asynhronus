import fs from 'fs/promises';

// BEGIN
export function getTypes(paths) {
    const promises = paths.map(path =>
        fs.stat(path)
            .then(stats => stats.isDirectory() ? 'directory' : 'file')
            .catch(() => null)
    );
    return Promise.all(promises);
}
// END
