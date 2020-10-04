function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
 const matchingDrivers = driversNamesWithRevenueOver(drivers, revenue);
 return matchingDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  const matchingDrivers = drivers.filter(function(driver) {
  for (const key in attribute) {
    return driver[key] === attribute[key];
}
});
matchDrivers
}

function exactMatchToList(drivers, name) {
  const driversNames = drivers.filter(function(driver) {
    for (const key in name) {
      return driver[key] === name[key];
    }
  });
  matchDrivers
}