export const filterToList = (filter) => {
  return Object
    .keys(filter)
    .reduce((acc, key) => filter[key] ? acc.concat(filter[key]) : acc, []);
}

export const doesContain = (filter, list) => {
  return list.filter(item => filter[item]).length > 0;
};

export const kebabCase = (text) => {
  return text.toLowerCase().replace(' ', '-');
}
