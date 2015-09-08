var assert = require('chai').assert;
var getbypath = require('../lib/getbypath');

var obj = {
  foo: {
    bar: {
      flag: true
    }
  },
  title: 'obj'
};

describe('getbypath', function () {
    it('should return correct data', function () {
      assert.equal(getbypath(obj, 'title'), 'obj');
      assert.equal(getbypath(obj, 'foo.bar.flag'), true);
      assert.typeOf(getbypath(obj, 'foo.bar'), 'object');
    });

    it('should return undefined for unknown path', function () {
      assert.typeOf(getbypath(obj, 'some.unknown.path'), 'undefined');
    });

    it('should not modify source without the third argument', function () {
      var myUndef = getbypath(obj, 'my.newPath');
      assert.typeOf(myUndef, 'undefined');
      assert.typeOf(obj.my, 'undefined');
    });

    it('should create an object with the third argument', function () {
      var myObj = getbypath(obj, 'my.newPath', true);
      assert.typeOf(myObj, 'object');
      assert.typeOf(obj.my.newPath, 'object');
      assert.equal(myObj, obj.my.newPath);
    });
});
