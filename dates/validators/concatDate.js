function formatDateStr (day, month, year) {
  day = day || '';
  month = month || '';
  year = year || '';
  return year + '-' + month + '-' + day;
}

function concatDate(obj, dayCol, monthCol, yearCol, newColName) {
  const day = obj[dayCol];
  const month = obj[monthCol];
  const year = obj[yearCol];
  obj[newColName] = formatDateStr(day, month, year);
  return obj;
}


console.log(concatDate({day: 8, year: '1990'}, 'day', 'month', 'year', 'fullDate'))
