export const translateToAlienLanguage = (text: string): string => {
    return text
        .split("")
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {

                return String.fromCharCode(char.charCodeAt(0) + 5);
            }
            return char;
        })
        .join("");
};

export const translateToHuman = (input: string): string => {
    return input
        .split("")
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {

                return String.fromCharCode(char.charCodeAt(0) - 5);
            }
            return char;
        })
        .join("");
};