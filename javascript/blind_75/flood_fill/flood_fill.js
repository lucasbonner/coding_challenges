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
  const current = image[sr][sc];

  if (current === newColor) {
    return image;
  }

  fill(image, sr, sc, newColor, current);

  return image;
};

var fill = function(image, sr, sc, newColor, current) {
  //if row is less than 0
  if (sr < 0) {
    return;
  }

  //if column is less than 0
  if (sc < 0) {
    return;
  }

  //if row is greater than image length
  if (sr > image.length - 1) {
    return;
  }

  //if column is greater than image length
  if (sc > image[sr].length - 1) {
    return;
  }

  //if the current pixel is not what it needs to be
  if (image[sr][sc] !== current) {
    return;
  }

  //update the new color
  image[sr][sc] = newColor;

  //fill in all four directions
  //fill prev row
  fill(image, sr - 1, sc, newColor, current);

  //fill next row
  fill(image, sr + 1, sc, newColor, current);

  //fill prev col
  fill(image, sr, sc - 1, newColor, current);

  //fill next col
  fill(image, sr, sc + 1, newColor, current);
}

// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); //[[2,2,2],[2,2,0],[2,0,1]]
// console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2)); //[[2,2,2],[2,2,2]]
// console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1));
// console.log(floodFill([[0,0,1],[0,0,0]], 0, 0, 2)); //[[2,2,1],[2,2,2]]
console.log(floodFill([[0,1,0],[0,0,1]], 1, 1, 1)); //[[1,1,0],[1,1,1]]
