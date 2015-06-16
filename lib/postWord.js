'use strict';

module.exports = function postWord(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for adding ' + word + ' to our word list.'};
};
