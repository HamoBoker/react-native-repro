import commandRunner from './commandRunner.mjs';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * @param {string} folderPath
 */
function isFolderExists(folderPath) {
  if (existsSync(folderPath)) {
    return true;
  } else {
    console.warn(`Path Not Found: ${folderPath}`);
    return false;
  }
}

commandRunner(
  `cd ${rootDir} && find ./ -type d \\( -name 'node_modules' -o -name '.pnpm-store' -o -name '.output' \\) -prune -exec rm -rf {} + && find . -type f \\( -name 'package-lock.json' -o -name 'pnpm-lock.yaml' \\) -delete`,
);

commandRunner(`cd ${rootDir} && pnpm install`);

commandRunner(`watchman watch-del-all`);
const derivedDataPath = commandRunner(
  'defaults read com.apple.dt.Xcode IDECustomDerivedDataLocation',
  { silent: true },
);

commandRunner(`rm -rf ${rootDir}/android/.gradle`);
commandRunner(`rm -rf ${rootDir}/android/app/build`);
commandRunner(`rm -rf ${rootDir}/android/build`);
commandRunner(`cd ${rootDir}/android && ./gradlew clean`);

if (isFolderExists(derivedDataPath)) {
  commandRunner(`cd ${rootDir} && node ${rootDir}/scripts/pod-install.mjs`);
}
