const fs = require('fs');

function csvMaker(newFileName, content) {
  //gather headers
  const headerKeys = Object.keys(content[0]);
  const headerString = headerKeys.join('|');

  // get data from arr
  const contentStrArr = content.map(obj => {
    let str = ''
    headerKeys.forEach(function(header, idx, arr) {
      const val = obj[header] === null ? '' : obj[header];
      const needsDelim = idx < arr.length - 1 ? '|' : '';

      str += val + needsDelim;
    })
    return str;
  })

  let fullContent = headerString + '\n' + contentStrArr.join('\n');

  return fs.writeFile(newFileName, fullContent, 'utf8', (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
  });
}

module.exports = csvMaker;
