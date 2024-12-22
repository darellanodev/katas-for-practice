class Translator {

    translate(robotPhrase) {
        const replacements = {
            '3': 'e',
            '%': ' ',
            '0': 'o',
        };
        return robotPhrase.replace(/[30%]/g, char => replacements[char]);
    }
}


module.exports = Translator;