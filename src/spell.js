class Spell {
	constructor() {
		this.vocabulary = ["Hi", "Hello", "You"];
	}

	spellChecker(sentence) {
		let sentenceContainer = sentence.split(" ");
		let checkedSentence = [];

		sentenceContainer.forEach((word) => {
			if (this.vocabulary.includes(word)) {
				checkedSentence.push(word);
			} else {
				checkedSentence.push(`~${word}~`);
			}
		});
		console.log(checkedSentence.join(""));
		return checkedSentence.join();
		// if (this.vocabulary.includes(sentenceContainer)) {
		// 	return sentence;
		// } else {
		// 	return `~${sentence}~`;
		// }
	}
}

module.exports = Spell;
