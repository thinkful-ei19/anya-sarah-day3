'use strict';
// This solution aims to perform the least iterations necessary for best performance, exiting a loop at earliest known moment where further searching is not necessary. It implements the continue and break keywords.

const findOne = function(arr, query) {
  
  // See for-of loops - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  // Iterates through array placing current element in locally scoped variable `hero`
  for (const hero of arr) {
    let assumeMatch = true;
  
    // loop through each key in `query` object
    for (const key in query) {
        
      // when first value in query[key] does NOT match hero[key]
      // break out of the loop and set assumeMatch = false
      if (query[key] !== hero[key]) {
        assumeMatch = false;
        break;
      }
    }
      
    // if failed to match, continue to next hero or exit loop if at last hero
    if (!assumeMatch) continue;
      
    // otherwise a match was found! return the hero
    return hero;
  }
  
  // heroes array was exited without a match so return null
  return null;
};





//Same findOne solution as above, except we loop through this.store.heroes and place the function on the Database object.
const Database = {
  store: {
    heroes: [ /* {}, {}, {} */ ]
  },
  
  findOne: function(query) {
    for (const hero of this.store.heroes) {
      let assumeMatch = true;
  
      for (const key in query) {
        if (query[key] !== hero[key]) {
          assumeMatch = false;
          break;
        }
      }
        
      if (!assumeMatch) continue;
        
      return hero;
    }
  
    return null;
  }
};