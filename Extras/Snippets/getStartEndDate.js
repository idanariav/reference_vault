// gets the start or end date of a period (such as month/quarter/week)
// its also possible to offset the date by num of days/months, useful for dynamic links
function getStartEndDate(period, snap_to, 
    offset=0, period_offset='days', format="YYYY-MM-DD"){
    const today = moment().format("YYYY-MM-DD")
    let period_slice = snap_to==="start" ? 
        moment(today).startOf(period) : 
        moment(today).endOf(period)
    return period_slice.add(offset, period_offset).format(format)
}
module.exports = getStartEndDate;