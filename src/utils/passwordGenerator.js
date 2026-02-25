const crypto = require('crypto');
const symbols = "!%^&*()+=@?#";

const secureRandomIndex = (maxExclusive) => {
    if (maxExclusive <= 0) return 0;
    return crypto.randomInt(maxExclusive);
};

const randomChoice = (list) => {
    if (!list.length) return '';
    return list[secureRandomIndex(list.length)];
};

const getRandomWord = (wordList) => {
    const word = randomChoice(wordList);
    return word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '';
};

const getRandomSymbol = () => randomChoice(symbols.split(''));
const getRandomDigit = () => secureRandomIndex(10);

const buildPassword = (words, extras) => {
    return words.reduce((acc, word, index) => {
        const extra = extras[index] !== undefined ? extras[index] : '';
        return `${acc}${word}${extra}`;
    }, '');
};

const generateSecurePassword = (wordList, numPasswords) =>
    Array.from({ length: numPasswords }, () => {
        const words = Array.from({ length: 3 }, () => getRandomWord(wordList));
        const extras = [getRandomDigit(), getRandomSymbol(), ''];
        return buildPassword(words, extras);
    });

const generateSimplePassword = (wordList) => {
    const words = Array.from({ length: 2 }, () => getRandomWord(wordList));
    const extras = [getRandomDigit(), getRandomDigit()];
    return buildPassword(words, extras);
};

const generateMultiSimplePasswords = (wordList, numPasswords) =>
    Array.from({ length: numPasswords }, () => generateSimplePassword(wordList));

const generateMultiSecurePasswords = (wordList, numPasswords) =>
    generateSecurePassword(wordList, numPasswords);

module.exports = {
    generateSecurePassword,
    generateSimplePassword,
    generateMultiSimplePasswords,
    generateMultiSecurePasswords
};
