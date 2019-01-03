const assert = require('assert');
const checkProtocol = require('../protocolCheck');

describe('checks for https protocol', function() {
  describe('#checkProtocol()', function() {
    it('should return the original string if it begins with the https protocol', function() {
      assert.equal(checkProtocol('https://www.stackery.io/'), 'https://www.stackery.io/');
    });
    it('should add https:// to the beginning of a string without it', function() {
      assert.equal(checkProtocol('www.jobbergroup.com'), 'https://www.jobbergroup.com');
    });
    it('should return an error message if the string is not a valid url', function() {
      assert.equal(checkProtocol('hi ken!'), 'Please enter a valid url');
    });
  });
});


