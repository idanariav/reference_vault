function checkWeekDay(date){
    const weekendDays = ['Friday', 'Saturday']
    if (weekendDays.indexOf(moment().format("dddd")) >= 0){
        return 1
    }
    else {
        return 0
    }
}
module.exports = checkWeekDay;