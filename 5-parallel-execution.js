import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(directoryPath, callback) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        async.map(files, (file, mapCallback) => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (statErr, stats) => {
                if (statErr) {
                    mapCallback(statErr);
                    return;
                }
                if (stats.isFile()) {
                    mapCallback(null, stats.size);
                } else {
                    mapCallback(null, 0);
                }
            });
        }, (mapErr, sizes) => {
            if (mapErr) {
                callback(mapErr);
                return;
            }
            const directorySize = _.sum(sizes);
            callback(null, directorySize);
        });
    });
}
// END

