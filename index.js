var jdate = require('jdate').JDate;

var package = {} ; 

package.date = function (time, timeZone = "Asia/Tehran", format){
    if (Date(time) && timeZone) {
        return jdate(Date(time).toLocaleString('en-GB', { timeZone: timeZone })).toString(format);
    } else if (timeZone) {
        return jdate(new Date().toLocaleString('en-GB', { timeZone: timeZone })).toString(format);
    } else {
        return jdate(Date(time)).toString(format);
    }
}

function convert(dateString , type){
    try {
        var arrSourceDate = dateString.substr(0,10).split('/') ;
        if (type == 'jalali') {
            // convert to jalali
            arrNewDate = jdate.convert().toJalali(arrSourceDate);
        } else {
            // convert to miladi
            arrNewDate = jdate.convert().toGregorian(arrSourceDate);
        }

        // make month and days 2 digit 
        arrNewDate = [arrNewDate[0], twoDigit(arrNewDate[1]), twoDigit(arrNewDate[2])]
        var twoDigit = function(value) {
            value += '';
            if (value.length < 2) {
                value = '0' + value;
            }
            return value;
        };

        return arrNewDate.join('/') + dateString.substr(10,9);
    } catch (error) {
        return dateString
    }
}
/**
 * convert miladi date string to jalali ([2019/10/25] o [2019/10/25 09:24:31])
 */
package.jalali = (dateString)=>{
    return convert(dateString,'jalali');
}

/**
 * convert jalali date string to miladi [(1398/09/04 09:05:51) or (1398/09/04 )]
 */
package.miladi = (dateString)=>{
    return convert(dateString,'miladi');
}

module.exports = package ; 
