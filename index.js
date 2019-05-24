
const returnFirstTwoDrivers = function (blah) { return blah.slice(0,2)}

const returnLastTwoDrivers = function (drivers) { return drivers.slice([drivers.length - 2], [drivers.length])}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  const newFunction = function (fare) {
    return fare * int
  }
  return newFunction
}

const fareDoubler = createFareMultiplier(2)