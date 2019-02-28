// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Converts the string to lowercase
    this.processor = function (string) {
        return string.toLowerCase();
    }
    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
}
//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    //override the processedContent method in Phrase
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
// we’ll use an important idea in object-oriented programming called inheritance, and arrange for TranslatedPhrase to inherit the desired palindrome method directly from Phrase. 
//The way to do this in JavaScript is to set the prototype of the second object type equal to an instance of the first; i.e., we need to set:

TranslatedPhrase.prototype = new Phrase();

//Because the prototype property of TranslatedPhrase has been set to a Phrase object, an instance of TranslatedPhrase automatically has all the methods of a Phrase instance, including palindrome.

// modify native JavaScript objects
// String.prototype.reverse = function() {
//    return Array.from(this).reverse().join("");
// }