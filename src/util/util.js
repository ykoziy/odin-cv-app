export function convertInputDates(startDateStr, endDateStr) {
  const newDates = {};
  const startDateArray = startDateStr.split('-');
  newDates.startDate = `${startDateArray[1]}/${startDateArray[2]}/${startDateArray[0]}`;
  if (endDateStr) {
    const endDateArray = endDateStr.split('-');
    newDates.endDate = `${endDateArray[1]}/${endDateArray[2]}/${endDateArray[0]}`;
  } else {
    newDates.endDate = 'Present';
  }
  return newDates;
}

export function setInputDate(date) {
  if (date === 'Present') {
    return '';
  } else {
    return new Date(date).toLocaleDateString('en-CA');
  }
}
