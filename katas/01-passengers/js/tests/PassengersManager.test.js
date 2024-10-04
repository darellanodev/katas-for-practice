const PassengersManager = require('../src/PassengersManager')

test('countPassengersAtLastStation, when data is passed, return the total of passengers', () => {
  const passengersManager = new PassengersManager()

  const data = [
    [5, 0],
    [7, 3],
    [2, 3],
  ]

  const actual = passengersManager.countPassengersAtLastStation(data)

  const expected = 5 + 7 + 2 - (0 + 3 + 3)
  expect(actual).toBe(expected)
})
