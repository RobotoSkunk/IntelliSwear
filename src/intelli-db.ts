import * as IntelliSwear from "./etc/swearTypes";
import { LanguageISOCode } from "./etc/langCodes";


export const __intelliSwearList: IntelliSwear.Swear[] = [
	{
		word: 'fuck',
		severity: 4,
		type: IntelliSwear.SwearType.Sexual | IntelliSwear.SwearType.Insult,
		language: LanguageISOCode.ALL
	}, {
		word: 'shit',
		severity: 4,
		type: IntelliSwear.SwearType.Innapropriate,
		language: LanguageISOCode.ALL
	}, {
		word: 'penis',
		severity: 1,
		type: IntelliSwear.SwearType.Sexual,
		language: LanguageISOCode.en
	}
];
