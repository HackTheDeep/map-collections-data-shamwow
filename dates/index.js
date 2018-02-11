const monthCorrector = require('./validators/month');
const dayCorrector = require('./validators/day');
const yearCorrector = require('./validators/year');
const dateConcat = require('./validators/concatDate');

const csvArr = require('./parseFile');
const csvMaker = require('./csvMaker');

const monthData = csvArr.map(elem => monthCorrector(elem, 'Collection Month (from)'));

const dayData = csvArr.map(elem => dayCorrector(elem, 'Collection Day (from)'));

const yearData = csvArr.map(elem => yearCorrector(elem, 'Collection Year (from)'));

const newDate = csvArr.map(elem => dateConcat(elem, 'new_Collection Day (from)','new_Collection Month (from)','new_Collection Year (from)', 'new_Collection Date (from)'));

csvMaker('cleaned.csv', newDate);
