// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strnatcasecmp = require('../../../../src/php/strings/strnatcasecmp.js') // eslint-disable-line no-unused-vars,camelcase

describe.skip('src/php/strings/strnatcasecmp.js (tested in test/languages/php/strings/test-strnatcasecmp.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1
    var result = strnatcasecmp(10, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = -1
    var result = strnatcasecmp('1', '10')
    expect(result).to.deep.equal(expected)
    done()
  })
})
