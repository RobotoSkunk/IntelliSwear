import { LanguageISOCode } from "./langCodes";

export enum SwearType {
	Sexual =         1 << 0,
	Discriminatory = 1 << 1,
	Ethnic =         1 << 2,
	Innapropriate =  1 << 3,
	Insult =         1 << 4,
	Blasphemy =      1 << 5,
	Taboo =          1 << 6,
	Gender =         1 << 7,
	Animal =         1 << 8,
	Slang =          1 << 9,

	ALL = 0xFFFF
}
export interface FilterOptions {
	severity: 0 | 1 | 2 | 3 | 4;
	type: SwearType,
	language: LanguageISOCode
}
export interface Swear extends FilterOptions {
	word: string;
}
