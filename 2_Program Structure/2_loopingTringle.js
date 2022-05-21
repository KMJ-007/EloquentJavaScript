/*
Date: 21th may 2022
Author: Karan Janthe
problem: Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

 */

/*
 *------------------------------------------------* 
                    solution
 *------------------------------------------------* 
 */
let char = "#";
for (let i = 0; i < 7; i++) {
  console.log(char);
  char += "#";
}

//following solution will not work here because, when console function is called, it prints on the new line
// for (let i = 0; i < 7; i++) {
//     //for printing row
//     for (let j = 0; j <= i; j++) {
//       console.log("#");
//     }
//     //for printing in new line
//       console.log("\n");
//   }
