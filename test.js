var shamsiDate = require('./index');

console.log(shamsiDate.date(null, null, 'yyyy/MM/dd'));// 1398/09/04 
console.log(shamsiDate.date(null, null, 'yyyy/MM/dd HH:mm:ss'));// 1398/09/04 09:05:51
console.log(shamsiDate.date(new Date(), null, 'yyyy/MM/dd HH:mm:ss'));// 1398/09/04 09:05:51
console.log(shamsiDate.date(null, "America/New_York", 'yyyy/MM/dd HH:mm:ss'));// 1398/09/04 09:05:51 
console.log(shamsiDate.date(new Date(), "Asia/Tehran", 'yyyy/MM/dd HH:mm:ss'));// 1398/09/04 09:05:51

console.log(shamsiDate.jalali('2019/10/25'));
console.log(shamsiDate.jalali('2019/10/25 09:24:31'));

console.log(shamsiDate.miladi('1398/09/04'));
console.log(shamsiDate.miladi('1398/09/04 09:05:51'));
