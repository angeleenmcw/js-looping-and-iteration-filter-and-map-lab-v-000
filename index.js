function driversWithRevenueOver(drivers) {
  return drivers.filter(driver => driver.revenue > driver)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const matchingDrivers = driversNamesWithRevenueOver(drivers, revenue); {
    matchingDrivers.map(driver => driver.name);
  }
}

function exactMatch(drivers, attribute) {
  const matchingDrivers = drivers.filter(function(driver)
}