/*
Date: 21th may 2022
Author: Karan Janthe
problem: 
Write a function min that takes two arguments and returns their minimum.
 */

/*
 *------------------------------------------------* 
                    solution
 *------------------------------------------------* 
 */

function min(a, b) {
  if (a < b) return a;
  return b;
}

console.log(min(0, 10));

console.log(min(0, -10));
