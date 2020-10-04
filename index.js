function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
 const matchDrivers = driversNamesWithRevenueOver(drivers, revenue);
 return matchDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  const matchDrivers = drivers.filter(function(driver) {
  for (const key in attribute) {
    return driver[key] === attribute[key];
}
});
matchDrivers
}

function exactMatchToList(drivers, name) {
  const matchDrivers = drivers.filter(function(driver) {
    for (const key in name) {
      return driver[key] === name[key];
    }
  });
  matchDrivers
}