function formatDateStr (day, month, year) {
  day = day || '';
  month = month || '';
  year = year || '';

  return [year + '-' + month + '-' + day];
}

function concatDate(obj, dayCol, monthCol, yearCol, newColName) {
  const day = obj[dayCol];
  const month = obj[monthCol];
  const year = obj[yearCol];
  obj[newColName] = formatDateStr(day, month, year);
  return obj;
}

module.exports = concatDate;
