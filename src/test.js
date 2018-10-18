const { getRandom, getUrlParam } = require('./index');

test('between 10 and 20', ()=>{
  var re = expect(getRandom(10, 20))
  re.toBeGreaterThanOrEqual(10)
  re.toBeLessThanOrEqual(20)
})
test("http://www.baidu.com?a=1 search a value is 1", ()=>{
  expect(getUrlParam('http://www.baidu.com?a=1', 'a')).toBe('1')
})
test("http://www.baidu.com?a=happy search a value is happy", ()=>{
  expect(getUrlParam('http://www.baidu.com?a=happy', 'a')).toBe('happy')
})