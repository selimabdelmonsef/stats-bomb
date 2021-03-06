import b from 'benny'
import { times } from 'ramda'
import { getRandomItems } from '../utils.js'

import * as main from '../index.js'
import * as naive from '../index.naive.js'

const itemsCount = 9999;
const randomItems = getRandomItems(itemsCount);
const sortedItems = times(i => ({ value: i }), itemsCount);

// Construct SORTED
b.suite(
  'Construct with an already sorted list of items',
  b.add('naive', () => {
    naive.List({
      sortKey: 'value',
      initial: sortedItems,
      initialOrder: true
    })
  }),

  b.add('main', () => {
    main.List(
      {
        sortKey: 'value',
        initial: sortedItems,
        initialOrder: true
      })
  }),
  b.cycle(),
  b.complete(),
)


// Construct UNSORTED
b.suite(
  'Construct unsorted list of items',
  
  b.add('naive', () => {
    naive.List({
      sortKey: 'value',
      initial: randomItems,
      initialOrder: false
    });
  }),
  b.add('main', () => {
    main.List({
      sortKey: 'value',
      initial: randomItems,
      initialOrder: false
      
    });
  }),
  b.cycle(),
  b.complete(),
)
