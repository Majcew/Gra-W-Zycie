var assert = require('assert');
var expect = require('chai').expect;
var functions = require('C:/xampp/htdocs/public_html/functions.js'); //funkcje użyte w naszym projekcie

function CreateAndPopulateGrid(row,col,boolean){ //funkcja pomocnicza do zapełniania tablicy MxN
  let array = [];
  for (var i = 0; i < row; i++) {
    array[i] = [];
  }
  if(boolean == true){
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < col; j++) {
         array[i][j] = Math.round(Math.random());
      }
    }
  }else
  {
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < col; j++) {
         array[i][j] = 0;
      }
    }
  }
  return array;
}

describe('Testy jednostkowe', function() {
  describe('Wszystkie funkcje, które zwracają jakąś wartość,obiekt:', function() {
    it('resetGrids(grid)', function() {
      var grid = CreateAndPopulateGrid(10,10,true);
      var expected = CreateAndPopulateGrid(10,10,false);
      var result = functions.resetGrids(grid);
      expect(result).to.eql(expected);
    });
    it('countNeighbors(col,row,grid)', function() {
      var grid = [];
      for(var i = 0;i<3;i++)
      grid[i] = [];
      grid = CreateAndPopulateGrid(3,3,false);
      grid[0][1] = 1;
      grid[1][1] = 1;
      grid[2][1] = 1;
      grid[1][0] = 1;
      grid[1][2] = 1;
      var expected1 = 4;
      var expected2 = 3;
      var result1 = functions.countNeighbors(1,1,grid,3,3);
      var result2 = functions.countNeighbors(0,1,grid,3,3);
      assert.equal(result1,expected1);
      assert.equal(result2,expected2);
    });
  });
});
