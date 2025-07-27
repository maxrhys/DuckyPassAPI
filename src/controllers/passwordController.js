const fs = require('fs');
const path = require('path');
const passwordGenerator = require('../utils/passwordGenerator');

const wordListPath = path.join(__dirname, '../data/wordlist.txt');
const wordList = fs.readFileSync(wordListPath, 'utf-8')
    .split('\n')
    .map(word => word.trim())
    .filter(Boolean);

const MAX_PASSWORDS = 100000;

exports.generateSimplePassword = (req, res) => {
    let quantity = parseInt(req.query.quantity, 10) || 1;
    if (quantity > MAX_PASSWORDS) quantity = MAX_PASSWORDS;
    if (quantity === 1) {
        const password = passwordGenerator.generateSimplePassword(wordList);
        res.type('text/plain').send(password);
    } else {
        const passwords = passwordGenerator.generateMultiSimplePasswords(wordList, quantity);
        res.json({ passwords });
    }
};

exports.generateSecurePassword = (req, res) => {
    let quantity = parseInt(req.query.quantity, 10) || 1;
    if (quantity > MAX_PASSWORDS) quantity = MAX_PASSWORDS;
    if (quantity === 1) {
        const password = passwordGenerator.generateSecurePassword(wordList, 1)[0];
        res.type('text/plain').send(password);
    } else {
        const passwords = passwordGenerator.generateMultiSecurePasswords(wordList, quantity);
        res.json({ passwords });
    }
};