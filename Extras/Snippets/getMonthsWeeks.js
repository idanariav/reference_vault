function getMonthsWeeks(title) {
    const [year, month] = title.split('-').map(Number);
    const weekNumbers = [];
  
    const firstDay = new Date(year, month - 1, 1); // Month is zero-based
    const lastDay = new Date(year, month, 0);
  
    for (let currentDay = firstDay; currentDay <= lastDay; currentDay.setDate(currentDay.getDate() + 1)) {
      const weekNumber = getISOWeek(currentDay);
      if (!weekNumbers.includes(weekNumber)) {
        weekNumbers.push(weekNumber);
      }
    }
  
    const formattedWeeks = weekNumbers.map(weekNumber => `[[${year}-W${String(weekNumber).padStart(2, '0')}]]`);
  
    return formattedWeeks.join(' ');
  }
  
  // Helper function to get ISO week number
  function getISOWeek(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  }
  
module.exports = getMonthsWeeks;