/*
TODO:
must come back and complete this solution
*/


/*
instructions:
  image represented by MxN integer grid
    where image[i][j] represent the pixel value of an image

  given three integers sr, sc, and newColor

  start a flood fill starting at img[sr][sc]

  flood fill:
    consider the starting pixel
    plus any pixels connected 4-directionally to the starting pixel
    of the same color as the starting pixel
    plus any pixels connected 4-directionally to those pixels


  input -> image (MxN), sr, sc, newColor
  output-> MxN grid after flood fill

so by 'four directionally' they mean up, down, left and right

so let's determine those

up would be (sr - 1)
down would be (sr + 1)
left would be (sc - 1)
right would be (sc + 1)

if any of those get changed to newColor, then they change as well

recursion maybe possible?
or just a loop?

one option is loop until an entire loop can be made
thru the entire image
w/o anything being changed

could have variable i
and loop until i === image length

and everytime an up, down, left, or right is equal to newColor
reassign current element
and set i back to 0
*/

var floodFill = function(image, sr, sc, newColor) {
  let i = 0;
  let row = 0;
  let original = image[sr][sc];
  let changed = false;
  image[sr][sc] = newColor;

  if (original === newColor) {
    return image;
  }

  while (i !== image.length) {
    let currentRow = image[row];

    for (let j = 0; j < currentRow.length; j++) {
      let currentElem = currentRow[j];

      if (row === sr && j === sc) {
        continue;
      }

      let up = row - 1 >= 0 ? image[row - 1][j] : null;
      let down = row + 1 < image.length ? image[row + 1][j] : null;
      let left = image[row][j - 1] || null;
      let right = image[row][j + 1] || null;

      if ((up === newColor || down === newColor || left === newColor || right === newColor) && image[row][j] === original && image[row][j] !== newColor) {
        image[row][j] = newColor;
        changed = true;
        row = 0;
        i = 0;
      }

    }

    if (changed) {
      changed = false;
      continue;
    }

    i++;
    row++;
  }
  return image;
};

// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); //[[2,2,2],[2,2,0],[2,0,1]]
// console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2)); //[[2,2,2],[2,2,2]]
// console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1));
// console.log(floodFill([[0,0,1],[0,0,0]], 0, 0, 2)); //[[2,2,1],[2,2,2]]
console.log(floodFill([[0,1,0],[0,0,1]], 1, 1, 1)); //[[1,1,0],[1,1,1]]
