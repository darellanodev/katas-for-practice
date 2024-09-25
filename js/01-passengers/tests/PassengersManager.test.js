const PassengersManager = require('../src/PassengersManager')

test('countPassengersAtLastStation, when data is passed, return the total of passengers', () => {
  const passengersManager = new PassengersManager()
  const actual = passengersManager.countPassengersAtLastStation()

  const expected = 0
  expect(actual).toBe(expected)
})
