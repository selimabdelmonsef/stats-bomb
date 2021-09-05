import { pipe, always, applySpec } from 'ramda';
import * as R from 'ramda';

const sort = (list, sortKey) => {
  return list.sort( (a, b) => {
    return (a[sortKey] || a) - (b[sortKey] || b);
  });
};

  const findIndex = (list, sortKey) => value => {
    return list.findIndex((element) => {
      return (element[sortKey] === value) || (element === value);
    });
  }

  const insert = (list, sortKey, item) => {
    return [...list, item]; //most effecient way to insert an item into a list                 

  }

  
const remove = (list, sortKey, value) => {
  const index = list.indexOf(value);
if (index > -1) {
   list.splice(index, 1);
}
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