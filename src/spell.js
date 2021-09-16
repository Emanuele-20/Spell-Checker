class Spell {
	constructor() {
		this.vocabulary = ["Hi"];
	}

	spellChecker(sentence) {
		if (this.vocabulary.includes(sentence)) {
			return sentence;
		} else {
			return `~${sentence}~`;
		}
	}
}

module.exports = Spell;
