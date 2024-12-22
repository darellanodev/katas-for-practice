class Translator {

    translate(robotPhrase) {
        return robotPhrase.replaceAll('3', 'e').replaceAll('%', ' ').replaceAll('0', 'o')
    }
}

module.exports = Translator;