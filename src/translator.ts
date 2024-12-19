const lowercaseSymbols = [
    '≡', '⩗', '⩛', '⌓', '⦿', '⩢', '⩕', '⩤', '△', '⩟',
    '⩔', '⨉', '⋔', '⩴', '⧫', '⟡', '⦵', '⩭', '⨀', '⊡',
    '⊙', '⩌', '⩊', '⧂', '⩬', '⊹'
];

const uppercaseSymbols = [
    '⊕', '⨁', '⩒', '⩑', '⊜', '⊛', '⋆', '⋇', '⨃', '⩩',
    '⩮', '⩳', '⩲', '⊼', '⧜', '⨆', '⨇', '⩴', '⦷', '⊗',
    '⧋', '⧩', '⩘', '⧪', '⩯', '⩬' 
];

const numberSymbols = [
    '✱', '✦', '✧', '⦿', '⨀', '⧫', '⬟', '⩋', '⧂', '✣'
];

const englishToAlien: Record<string, string> = {};
const alienToEnglish: Record<string, string> = {};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach((char, index) => {
    englishToAlien[char] = lowercaseSymbols[index];
    alienToEnglish[lowercaseSymbols[index]] = char;
});

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((char, index) => {
    englishToAlien[char] = uppercaseSymbols[index];
    alienToEnglish[uppercaseSymbols[index]] = char;
});

'0123456789'.split('').forEach((char, index) => {
    englishToAlien[char] = numberSymbols[index];
    alienToEnglish[numberSymbols[index]] = char;
});