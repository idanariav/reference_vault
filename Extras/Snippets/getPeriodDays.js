function getPeriodDays(date, period='week', format='yaml') {
  const startDate = moment(date, 'YYYY-MM-DD').startOf(period);
  const endDate = moment(date, 'YYYY-MM-DD').endOf(period);
  const daysCount = endDate.diff(startDate, 'days') + 1;
  if (format === "yaml") {
      const allDayDates = Array.from({ length: daysCount }, (_, i) =>
    `- "[[${startDate.clone().add(i, 'days').format('YYYY-MM-DD')}]]"`
  ).join('\n');
    return allDayDates;
}
  else {
    const allDayDates = Array.from({ length: daysCount }, (_, i) =>
    `[[${startDate.clone().add(i, 'days').format('YYYY-MM-DD')}]]`
  ).join(' ');
    return allDayDates;
  }
}

module.exports = getPeriodDays;