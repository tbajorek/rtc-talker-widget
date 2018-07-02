const getFromComplexObject = (object, propertiesList) => {
  let sourceObject = object;
  for (const property of propertiesList) {
    if (typeof sourceObject === 'object' && property in sourceObject && sourceObject[property] !== null) {
      sourceObject = sourceObject[property];
    } else {
      return null;
    }
  }
  return sourceObject;
};

export default getFromComplexObject;
