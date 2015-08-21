var assert = require('assert');
var should = require('should');
var DomHelper = require('../index.js');

describe('Renders HTML', function () {
  it('should return an html string if no wrapper', function (done) {
    assert(DomHelper.render('<div>hello</div>'), '<div>hello</div>');
    done();
  });
});
