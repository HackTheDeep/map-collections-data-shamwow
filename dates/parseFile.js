const path = require('path');
const fs = require('fs')

function FileObject(colNames, rowArr) {
  //turns string pieces into numbers
  rowArr = rowArr.map(elem => {
    return elem === '' ? null : elem;
  })
  colNames.forEach((colName, idx) => {
    this[colName] = rowArr[idx]
  })
}

function parseFileArr (arr) {
  const splitRows = arr.split('\n').map(row => row.split(','));
  const headers = splitRows.shift();
  return splitRows.map(row => new FileObject(headers, row))
}

const csvFile = fs.readFileSync(path.join(__dirname, 'LimitedCol-hackTheDeepCSV.csv'), 'utf8');
const csvArr = parseFileArr(csvFile);

module.exports = csvArr;

