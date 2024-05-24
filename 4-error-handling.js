import fs from 'fs';

// BEGIN
export function move(source, destination, callback) {
    fs.readFile(source, (readError, data) => {
        if (readError) {
            callback(readError);
            return;
        }
        fs.writeFile(destination, data, (writeError) => {
            if (writeError) {
                callback(writeError);
                return;
            }
            fs.unlink(source, (unlinkError) => {
                callback(unlinkError);
            });
        });
    });
}
// END
