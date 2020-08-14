const saz2har = require('saz2har');
const path = require('path');
const fs = require('fs');

const SAZ_PATH = 'saz';
const HAR_PATH = 'har';

const SAZ_EXT = '.saz';
const HAR_EXT = '.har';

const sazPath = path.join(__dirname, SAZ_PATH);
const harPath = path.join(__dirname, HAR_PATH);

fs.readdir(sazPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    let extension = path.extname(file);
    let filename = path.basename(file, extension);
    if (extension === SAZ_EXT) {
      console.log(`${__dirname}/${SAZ_PATH}/${file}`);
      console.log(`${__dirname}/${HAR_PATH}/${filename}${HAR_EXT}`);

      saz2har.convert(
        `${__dirname}/${SAZ_PATH}/${file}`,
        `${__dirname}/${HAR_PATH}/${filename}${HAR_EXT}`,
        {
          validate: false,
        }
      );
    }
  });
});
