//hash common month listings
const months = {
  Jan: 'January',
  Feb: 'Febuary',
  Mar: 'March',
  Apr: 'April',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
  January: 'January',
  Febuary: 'Febuary',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
}


const capitalize = function (str) {
  if (typeof str !== 'string') {
    return str
  }
  else {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}

//Takes in objects and gets full month name in fileObj.new_${column}
function correctData(fileObj, column) {
  const fileVal = fileObj[column];
  const cappedFileVal = capitalize(fileVal)
  if (months[cappedFileVal]) {
    fileObj['new_'+ column] = months[cappedFileVal];
  } else {
    fileObj['new_'+ column] = null;
  }
  return fileObj;
}


module.exports = correctData;
