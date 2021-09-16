class Spell {
	constructor() {
		this.vocabulary = ["Hi", "Hello", "You"];
	}

	spellChecker(sentence) {
		let sentenceContainer = sentence.split(" ");
		let checkedSentence = [];
		const lowerCasedVocabulary = this.vocabulary.map((x) => x.toLowerCase());

		sentenceContainer.forEach((word) => {
			if (lowerCasedVocabulary.includes(word.toLowerCase())) {
				checkedSentence.push(word);
			} else {
				checkedSentence.push(`~${word}~`);
			}
		});
		return checkedSentence.join(" ");
	}
}

module.exports = Spell;
