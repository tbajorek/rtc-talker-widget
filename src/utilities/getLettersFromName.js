const getLettersFromName = name => name.match(/\b(\w)/g).join('');

export default getLettersFromName;
