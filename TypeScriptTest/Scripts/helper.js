var date2JS = function (rawDate) {
    if (rawDate==null) {
        return rawDate;
    }
    var date = new Date(rawDate.match(/\d+/)[0] * 1); //CHANGED LINE
    return date;
};