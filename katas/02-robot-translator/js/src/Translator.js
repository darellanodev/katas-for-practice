class Translator {
  translate(robotPhrase) {
    const replacements = {
      3: 'e',
      '%': ' ',
      0: 'o',
      1: 'i',
    }
    const regex = new RegExp(Object.keys(replacements).join('|'), 'g')
    return robotPhrase.replace(regex, (char) => replacements[char])
  }
}

module.exports = Translator
