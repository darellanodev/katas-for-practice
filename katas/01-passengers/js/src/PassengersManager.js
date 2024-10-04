class PassengersManager {
  static UP = 0
  static DOWN = 1

  countPassengersAtLastStation(data) {
    let upPassengers = 0
    let downPassengers = 0
    for (let station of data) {
      upPassengers += station[PassengersManager.UP]
      downPassengers += station[PassengersManager.DOWN]
    }
    return upPassengers - downPassengers
  }
}

module.exports = PassengersManager
