/*
Date: 21th may 2022
Author: Karan Janthe
problem: 
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
 */

/*
 *------------------------------------------------* 
                    solution
 *------------------------------------------------* 
 */

//first i should make a grid, and then i should decide where to place space
var size = window.prompt("Enter your size of chessboard: ");
alert("you have entered " + size);
let string = "";
for (let row = 1; row <= size; row++) {
  string = "";
  for (let col = 1; col <= size; col++) {
    // console.log("column, row", col, row);
    if ((row + col) % 2 === 0) {
      string += " ";
    } else {
      string += "#";
    }
  }
  console.log(string);
}
