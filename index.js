var jdate = require('jdate').JDate;

var package = {} ; 

package.date = function (format){
    return jdate().toString(format); 
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
