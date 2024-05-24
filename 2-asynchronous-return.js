import fs from 'fs';

// BEGIN
export default function write(filePath, data, callback) {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}
// END
