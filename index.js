const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(drivers){
    let newDrivers = drivers.slice(0, 2);
    return newDrivers;
}
function returnLastTwoDrivers(drivers){
    let newDrivers = drivers.slice(2);
    return newDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n){
    return function (fare){
        return n*fare;
    }
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(drivers, callBack){
    return callBack(drivers);
}