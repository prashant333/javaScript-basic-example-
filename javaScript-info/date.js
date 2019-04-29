// European weekDays

function europeanWeekdays(date) {
    let days=['SUnday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday']
    return days[date.getDay()]
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( europeanWeekdays(date) );