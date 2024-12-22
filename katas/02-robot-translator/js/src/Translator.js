class Translator {

    translate(robotPhrase) {
        const replacements = {
            '3': 'e',
            '%': ' ',
            '0': 'o',
            '1': 'i',
        };
        return robotPhrase.replace(/[30%1]/g, char => replacements[char]);
    }
}


module.exports = Translator;