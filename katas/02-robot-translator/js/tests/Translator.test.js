const Translator = require('../src/Translator');

describe("translator", () => {
  it("translate the robot string to human readable format", () => {
    const translator = new Translator();
    expect(translator.translate("H3ll0%w0rld")).toBe("Hello world");
  });
});
