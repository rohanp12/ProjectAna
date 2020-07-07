
var keyword_extractor = require("keyword-extractor");
 

export function keywordExtraction(input) {
  var extraction_result = keyword_extractor.extract(input,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false

});
var responseString = "";
for (var i=0; i<extraction_result.length();i++ ) {
  responseString += extraction_result[i] + " ";
}

return responseString;
}
