const getLettersFromName = name => (name !== null ? name.match(/\b(\w)/g).join('') : null);

export default getLettersFromName;
