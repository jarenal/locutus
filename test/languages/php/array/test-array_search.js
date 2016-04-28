// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_search = require('../../../../src/php/array/array_search.js') // eslint-disable-line no-unused-vars,camelcase

describe.skip('src/php/array/array_search.js (tested in test/languages/php/array/test-array_search.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'surname'
    var result = array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'})
    expect(result).to.deep.equal(expected)
    done()
  })
})
