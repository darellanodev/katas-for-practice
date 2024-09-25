class PassengersManager {
  countPassengersAtLastStation(data) {
    let upPassengers = 0
    let downPassengers = 0
    for (let station of data) {
      upPassengers += station[0]
      downPassengers += station[1]
    }
    return upPassengers - downPassengers
  }
}

module.exports = PassengersManager
