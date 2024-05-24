import fs from 'fs';

// BEGIN
export default function watch(filePath, interval, callback) {
    let previousModificationTime = null;

    const checkFile = () => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                clearInterval(timerId);
                callback(err);
                return;
            }

            const currentModificationTime = stats.mtimeMs;

            if (previousModificationTime !== null && currentModificationTime > previousModificationTime) {
                callback(null);
            }

            previousModificationTime = currentModificationTime;
        });
    };

    const timerId = setInterval(checkFile, interval);

    return timerId;
}
// END
