const PACKAGE_FILENAME = '../package.json';

const package = require(PACKAGE_FILENAME);
const oldVersion = package.version;

const version = oldVersion.split('.');
version[2]++;

package.version = version.join('.');
const output = JSON.stringify(package, null, '\t');

require('fs').writeFile(PACKAGE_FILENAME, output, function (err) {
  if (err) {
    throw(err);
  }

  console.log('Bumped version: ' + oldVersion + ' -> ' + package.version);
});
