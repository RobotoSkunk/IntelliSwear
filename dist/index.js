"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwearType = exports.LanguageISOCode = exports.censorWords = exports.findWords = exports.removeWords = exports.addWords = void 0;
const intelli_db_1 = require("./intelli-db");
const langCodes_1 = require("./etc/langCodes");
Object.defineProperty(exports, "LanguageISOCode", { enumerable: true, get: function () { return langCodes_1.LanguageISOCode; } });
const swearTypes_1 = require("./etc/swearTypes");
Object.defineProperty(exports, "SwearType", { enumerable: true, get: function () { return swearTypes_1.SwearType; } });
const defaultFilter = {
    severity: 3,
    type: swearTypes_1.SwearType.ALL,
    language: langCodes_1.LanguageISOCode.ALL
};
/**
 * Add words to the IntelliSwear list. If a word already exists in the list, it's values will be replaced.
 * @param swear The swear to add to the list.
 */
function addWords(...swear) {
    for (const __sw of swear) {
        const existent = swear.filter(s => s.word === __sw.word.toLowerCase());
        if (existent.length > 0) {
            // Replace the existing swear with the new one
            for (const __existent of existent) {
                const index = intelli_db_1.__intelliSwearList.indexOf(__existent[0]);
                __sw.word = __sw.word.toLowerCase();
                intelli_db_1.__intelliSwearList[index] = __sw;
            }
            continue;
        }
        intelli_db_1.__intelliSwearList.push(__sw);
    }
}
exports.addWords = addWords;
/**
 * Remove words from the IntelliSwear list.
 * @param swear The swear to remove from the list.
 */
function removeWords(...swear) {
    for (const __sw of swear) {
        const index = intelli_db_1.__intelliSwearList.findIndex(s => s.word === __sw.toLowerCase());
        if (index > -1)
            intelli_db_1.__intelliSwearList.splice(index, 1);
    }
}
exports.removeWords = removeWords;
/**
 * Finds all the words in the list that match the filter.
 * @param text The text to search for.
 * @param filter The filter to use.
 * @returns The list of words that match the filter.
 */
function* findWords(text, filter = defaultFilter) {
    for (const __sw of intelli_db_1.__intelliSwearList) {
        if (__sw.severity > filter.severity)
            continue;
        if ((__sw.type & filter.type) === 0)
            continue;
        if ((__sw.language & filter.language) === 0)
            continue;
        const regex = new RegExp(__sw.word, 'gi');
        const matches = text.match(regex);
        if (matches === null)
            continue;
        yield __sw;
    }
}
exports.findWords = findWords;
/**
 * Censor a text by replacing swear words with a defined replacement.
 * @param text The text to censor.
 * @param replacement The replacement to use.
 * @param filter The filter to use.
 * @returns The censored text.
 */
function censorWords(text, replacement = '*', filter = defaultFilter) {
    for (const __sw of findWords(text, filter)) {
        const regex = new RegExp(__sw.word, 'gi');
        text = text.replace(regex, replacement.repeat(__sw.word.length));
    }
    return text;
}
exports.censorWords = censorWords;
