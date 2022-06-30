"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwearType = void 0;
var SwearType;
(function (SwearType) {
    SwearType[SwearType["Sexual"] = 1] = "Sexual";
    SwearType[SwearType["Discriminatory"] = 2] = "Discriminatory";
    SwearType[SwearType["Ethnic"] = 4] = "Ethnic";
    SwearType[SwearType["Innapropriate"] = 8] = "Innapropriate";
    SwearType[SwearType["Insult"] = 16] = "Insult";
    SwearType[SwearType["Blasphemy"] = 32] = "Blasphemy";
    SwearType[SwearType["Taboo"] = 64] = "Taboo";
    SwearType[SwearType["Gender"] = 128] = "Gender";
    SwearType[SwearType["Animal"] = 256] = "Animal";
    SwearType[SwearType["Slang"] = 512] = "Slang";
    SwearType[SwearType["ALL"] = 65535] = "ALL";
})(SwearType = exports.SwearType || (exports.SwearType = {}));
