function getMonthsWeeks(date){
    const currentMonthDates = new Array(
        moment(date,'YYYY-MM').endOf('month').week() - 
        moment(date, 'YYYY-MM').startOf('month').week() + 1).
        fill(null).map(
            (x, i) => moment(date,'YYYY-MM').
            startOf('month').add(i, 'weeks').
            format("[[gggg-[W]ww[]]]")).join(' ')
    return currentMonthDates
}
module.exports = getMonthsWeeks;