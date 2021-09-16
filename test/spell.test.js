const Spell = require("../src/spell");

beforeEach(() => {
	spell = new Spell();
});

describe("Spell Checker", () => {
	it("Returns a correct sentece", () => {
		expect(spell.spellChecker("Hi")).toBe("Hi");
	});
	it("Returns a correct sentece if it is capitalized", () => {
		expect(spell.spellChecker("HI")).toBe("HI");
	});
	it("Returns a correct sentece if the capitalization in odd", () => {
		expect(spell.spellChecker("HeLLo")).toBe("HeLLo");
	});
	it("Returns miss-pelled sentence rounded by ~ ", () => {
		expect(spell.spellChecker("Ht")).toBe("~Ht~");
	});
	it("Returns an correct sentence longer than one word", () => {
		expect(spell.spellChecker("Hello You")).toBe("Hello You");
	});
	it("Returns an correct sentence longer than one word with an odd capitalization", () => {
		expect(spell.spellChecker("Hello YOu")).toBe("Hello YOu");
	});
	it("Returns an incorrect sentence longer than one word with one word miss-spelled", () => {
		expect(spell.spellChecker("Hello Yoy")).toBe("Hello ~Yoy~");
	});
	it("Thrown an error if i don't pass a valide argument", () => {
		expect(() => {
			spell.spellChecker(45);
		}).toThrow("You must provide a string");
	});
	it("Thrown an error if i don't pass an argument", () => {
		expect(spell.spellChecker).toThrow("You must provide a string");
	});
});
