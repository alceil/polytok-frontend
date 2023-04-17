export const makeObjectFromArray = (array, initialValue) => {
    const createdObject = {};
    array.forEach((element) => {
      createdObject[element] = initialValue;
    });
    return createdObject;
  };
  
  /**
   *
   * A function to remove all entries of an object with a certain value
   * @param {Object} object The object to be modified
   * @param {any} valueToFilter The value to be filtered
   * @returns Modified object which will not contain the valueToFilter in it.
   */
  export const filterObject = (object, valueToFilter) => {
    const newObject = { ...object };
    Object.keys(newObject).forEach(
      (key) => newObject[key] === valueToFilter && delete newObject[key]
    );
    return newObject;
  };
  
  export const getFullName = (user) => {
    const { firstname = null, lastname = null } = user || {};
    if (lastname) {
      return `${firstname} ${lastname}`;
    }
    return firstname;
  };
  
  export const readFile = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  