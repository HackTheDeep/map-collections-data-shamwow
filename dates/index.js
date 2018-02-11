const monthCorrector = require('./validators/month');
const dayCorrector = require('./validators/day');
const yearCorrector = require('./validators/year');

const csvArr = require('./parseFile');
const csvMaker = require('./csvMaker');

const monthData = csvArr.map(elem => monthCorrector(elem, 'Collection Month (from)'));

const dayData = csvArr.map(elem => dayCorrector(elem, 'Collection Day (from)'));

const yearData = csvArr.map(elem => yearCorrector(elem, 'Collection Year (from)'));

csvMaker('cleaned.csv', monthData);
csvMaker('cleaned.csv', dayData);
csvMaker('cleaned.csv', yearData);
