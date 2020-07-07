"use strict";
//written by Rohan Patel for use in adding NLP to Beingo
exports.__esModule = true;
exports.getKeyword = void 0;
//based off TextRank4Keyword.py from https://towardsdatascience.com/textrank-for-keyword-extraction-by-python-c0bae21bcec0
//original work under MIT license, code ported to TypeScript
//var nj = require('numjs');
// Note you can pass multiple sentences concat in one string.
// Store output into variable
var TextRank = /** @class */ (function () {
    function TextRank() {
        this.d = 0.85;
        this.min_diff = 1e-5;
        this.steps = 10;
        this.node_weight = [];
    }
    TextRank.prototype.analyze = function (text, candidate_pos, window_size, lower) {
        if (candidate_pos === void 0) { candidate_pos = ['VERB', 'NOUN']; }
        if (window_size === void 0) { window_size = 4; }
        if (lower === void 0) { lower = false; }
        console.log(text);
        //const result = await nlp.parse(text);
        //result.sents;
    };
    TextRank.prototype.get_word = function () {
        return "hi";
    };
    return TextRank;
}());
function getKeyword(input) {
    var keywordExtractor = new TextRank();
    keywordExtractor.analyze(input);
    var keyword = keywordExtractor.get_word();
    return keyword;
}
exports.getKeyword = getKeyword;
