module.exports = {
    isLeapYear: function (year) {
        var GUX_ADZAT = [3, 6, 8, 11, 14, 17, 0];
        return GUX_ADZAT.includes(year % 19);
    }
};