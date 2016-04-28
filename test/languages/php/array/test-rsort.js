// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var rsort = require('../../../../src/php/array/rsort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/rsort.js (tested in test/languages/php/array/test-rsort.js)', function () {
  it.skip('should pass example 1', function (done) {
    var expected = ['van', 'Zonneveld', 'Kevin']
    var $arr = ['Kevin', 'van', 'Zonneveld']
    rsort($arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {0: 'orange', 1: 'lemon', 2: 'banana', 3: 'apple'}
    ini_set('locutus.strictForIn', true)
    var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    rsort($fruits)
    var result = $fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})
