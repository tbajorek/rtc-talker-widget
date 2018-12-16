/**
 * It returns a value under the path given by propertiesList parameter.
 * Order of that array is important. If the path determined by it is not existed in the complex object,
 * then null value is returned.
 *
 * @param {object} object Complex object with many nested values
 * @param {array} propertiesList List of following properties
 * @return {*}
 */
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
