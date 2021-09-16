class Spell {
	constructor() {
		this.vocabulary = ["Hi", "Hello", "You"];
	}

	spellChecker(sentence) {
		if (typeof sentence === "string") {
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
		} else {
			throw new Error("You must provide a string");
		}
	}
}

module.exports = Spell;
