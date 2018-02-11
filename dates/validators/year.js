// year yearValidator
const yearValidator = function(int) {
  if( typeof +int === 'number' && +int < 2500 && +int > 1000){
    return +int;
  } else {
    // original entered val
    return int;
  }
}

//Takes in objects and gets full month name in fileObj.new_${column}
function correctYear(fileObj, column) {
  const fileVal = fileObj[column];
  const validDate = yearValidator(fileVal)
  if (typeof validDate === 'number' && validDate > 0) {
    fileObj['new_' + column] = validDate;
  } else {
    fileObj['new_' + column] = null;
  }
  // console.log(fileObj);
  return fileObj;
}

module.exports = correctYear;
