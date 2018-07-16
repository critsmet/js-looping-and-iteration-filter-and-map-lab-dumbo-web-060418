// Code your solution here:

function driversWithRevenueOver(driver, revenue){
  return driver.filter( function (driver){
    return driver.revenue > revenue });
}

function driverNamesWithRevnueOver(driver, revenue){
  let driverNames = driversWithRevenueOver(driver, revenue)
  driverNames.map ( function (driver){
    return driver.name });
}

function exactMatch(driver, object0