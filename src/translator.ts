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