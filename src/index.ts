import { __intelliSwearList } from "./intelli-db";
import { LanguageISOCode } from "./etc/langCodes";
import { SwearType, FilterOptions, Swear } from "./etc/swearTypes";


const defaultFilter: FilterOptions = {
	severity: 3,
	type: SwearType.ALL,
	language: LanguageISOCode.ALL
};

/**
 * Add words to the IntelliSwear list. If a word already exists in the list, it's values will be replaced.
 * @param swear The swear to add to the list.
 */
export function addWords(...swear: Swear[]): void {
	for (const __sw of swear) {
		const existent = swear.filter(s => s.word === __sw.word.toLowerCase());

		if (existent.length > 0) {
			// Replace the existing swear with the new one
			for (const __existent of existent) {
				const index = __intelliSwearList.indexOf(__existent[0]);
				__sw.word = __sw.word.toLowerCase();
				__intelliSwearList[index] = __sw;
			}
			continue;
		}

		__intelliSwearList.push(__sw);
	}
}

/**
 * Remove words from the IntelliSwear list.
 * @param swear The swear to remove from the list.
 */
export function removeWords(...swear: string[]): void {
	for (const __sw of swear) {
		const index = __intelliSwearList.findIndex(s => s.word === __sw.toLowerCase());
		if (index > -1) __intelliSwearList.splice(index, 1);
	}
}

/**
 * Finds all the words in the list that match the filter.
 * @param text The text to search for.
 * @param filter The filter to use.
 * @returns The list of words that match the filter.
 */
export function* findWords(text: string, filter: FilterOptions = defaultFilter): IterableIterator<Swear> {
	for (const __sw of __intelliSwearList) {
		if (__sw.severity > filter.severity) continue;
		if ((__sw.type & filter.type) === 0) continue;
		if ((__sw.language & filter.language) === 0) continue;

		const regex = new RegExp(__sw.word, 'gi');
		const matches = text.match(regex);

		if (matches === null) continue;

		yield __sw;
	}
}

/**
 * Censor a text by replacing swear words with a defined replacement.
 * @param text The text to censor.
 * @param replacement The replacement to use.
 * @param filter The filter to use.
 * @returns The censored text.
 */
export function censorWords(text: string, replacement: string = '*', filter: FilterOptions = defaultFilter): string {
	for (const __sw of findWords(text, filter)) {
		const regex = new RegExp(__sw.word, 'gi');

		text = text.replace(regex, replacement.repeat(__sw.word.length));
	}

	return text;
}


export {
	LanguageISOCode,
	SwearType,
	FilterOptions,
	Swear
}
