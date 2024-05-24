import fs from 'fs';

// BEGIN
export function compareFileSizes(filepath1, filepath2, callback) {
    fs.stat(filepath1, (error1, stats1) => {
        if (error1) {
            callback(error1);
            return;
        }
        fs.stat(filepath2, (error2, stats2) => {
            if (error2) {
                callback(error2);
                return;
            }
            const sizeDiff = Math.sign(stats1.size - stats2.size);
            callback(null, sizeDiff);
        });
    });
}
// END
