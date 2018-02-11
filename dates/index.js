const monthCorrector = require('./month');
const csvArr = require('./parseFile');
const csvMaker = require('./csvMaker');

const dataArr = csvArr.map(elem => monthCorrector(elem, 'Collection Month (from)'));

csvMaker('test.csv', dataArr);
