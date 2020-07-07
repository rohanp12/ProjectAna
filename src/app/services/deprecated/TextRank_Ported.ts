//written by Rohan Patel for use in adding NLP to Beingo

//based off TextRank4Keyword.py from https://towardsdatascience.com/textrank-for-keyword-extraction-by-python-c0bae21bcec0
//original work under MIT license, code ported to TypeScript
//var nj = require('numjs');

// Note you can pass multiple sentences concat in one string.

 
// Store output into variable

class TextRank
 {
    d: number;
    min_diff: number;
    steps: number;
    node_weight: Array<number>

    constructor() {
      this.d = 0.85;
      this.min_diff = 1e-5;
      this.steps = 10;
      this.node_weight = [];
    }
    analyze(text, candidate_pos = ['VERB', 'NOUN'], window_size=4, lower=false) {
      console.log(text);
   
      //const result = await nlp.parse(text);
      //result.sents;
    }
    get_word() {
      return "hi";
    }
 }

export function getKeyword(input) {
  let keywordExtractor = new TextRank();
  keywordExtractor.analyze(input);
  let keyword = keywordExtractor.get_word()
  return keyword;
}

