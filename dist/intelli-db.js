"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__intelliSwearList = void 0;
const IntelliSwear = __importStar(require("./etc/swearTypes"));
const langCodes_1 = require("./etc/langCodes");
exports.__intelliSwearList = [
    {
        word: 'fuck',
        severity: 4,
        type: IntelliSwear.SwearType.Sexual | IntelliSwear.SwearType.Insult,
        language: langCodes_1.LanguageISOCode.ALL
    }, {
        word: 'shit',
        severity: 4,
        type: IntelliSwear.SwearType.Innapropriate,
        language: langCodes_1.LanguageISOCode.ALL
    }, {
        word: 'penis',
        severity: 1,
        type: IntelliSwear.SwearType.Sexual,
        language: langCodes_1.LanguageISOCode.en
    }
];
