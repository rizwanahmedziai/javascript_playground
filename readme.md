Sample NPM module that checks whether the given string is a palindrome.

The module can be used as follows:

$ npm install --global riz-palindrome
$ vim test.js
let Phrase = require("riz-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
$ true
