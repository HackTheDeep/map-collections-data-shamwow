// Check if date is less than 31 and an integer
function dateValidator(int){
  if(+int <= 31){
    return +int;
  } else {
    return int;
  }
}

//Takes in objects and gets full month name in fileObj.new_${column}
function correctDay(fileObj, column) {
  const fileVal = fileObj[column];
  const validDate = dateValidator(fileVal)
  if (typeof validDate === 'number' && validDate > 0) {
    fileObj['new_'+ column] = validDate;
  } else {
    fileObj['new_'+ column] = null;
  }
  // console.log(fileObj);
  return fileObj;
}




module.exports = correctDay;
