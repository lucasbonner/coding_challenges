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
  image[sr][sc] = newColor;

  while (i !== image.length - 1) {
    let currentRow = image[row];

    for (let j = 0; j < currentRow.length; j++) {
      let currentElem = currentRow[j];

      let up = image[row - 1][column];
      let down = image[row + 1][column];
      let left = image[row][column - 1];
      let right = image[row][column + 1]

      if (up === newColor || down === newColor || left === newColor || right === newColor) {
        image[row][j] = newColor;
      }

    }

    i++;
    row++;
  }
  return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); //[[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2)); //[[2,2,2],[2,2,2]]