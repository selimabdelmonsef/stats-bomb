import { pipe, always, applySpec } from 'ramda';

const sort = (list, sortKey) => {
  return list.sort( (a, b) => {
    return (a[sortKey] || a) - (b[sortKey] || b);
  });
};

const findIndex = (list, sortKey) => value => {
  // SHOULD IMPLEMENT
  return -1;
}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  return list;
}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT
  return list;
}

/**
 * @param { (sortkey) to find and delete, (initial) is the array of objects, (initialOrder) boolean true if sorted } keys 
 * @returns processed array
 */
export const List = ({ sortKey, initial, initialOrder }) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      initialOrder: true
    })
  };
}