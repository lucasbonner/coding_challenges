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

*/

var floodFill = function(image, sr, sc, newColor) {

};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); //[[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2)); //[[2,2,2],[2,2,2]]
