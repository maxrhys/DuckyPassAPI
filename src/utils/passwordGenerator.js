const symbols = "!%^&*()+=@?#";

const getRandomWord = (wordList) => {
    if (!wordList.length) return '';
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index] || '';
};

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
const getRandomDigit = () => Math.floor(Math.random() * 10);

const generateSecurePassword = (wordList, numPasswords) => {
    return Array.from({ length: numPasswords }, () => {
        const words = Array.from({ length: 3 }, () => {
            const word = getRandomWord(wordList);
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        return `${words[0]}${getRandomDigit()}${words[1]}${getRandomSymbol()}${words[2]}`;
    });
};

const generateSimplePassword = (wordList) => {
    const words = Array.from({ length: 2 }, () => getRandomWord(wordList));
    const digits = [getRandomDigit(), getRandomDigit()];
    return `${words[0]}${words[1]}${digits[0]}${digits[1]}`;
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