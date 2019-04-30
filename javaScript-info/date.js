// European weekDays

// function europeanWeekdays(date) {
//     let days=['SUnday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday']
//     return days[date.getDay()]
// }
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( europeanWeekdays(date) );

// date substraction

function dateSubstract(date, day) {
    let date1 = new Date(date)
    date1.setDate(date1.getDate()-day);
    return date1;
}
let date= new Date(2018,0,3)
console.log(dateSubstract(date,1))