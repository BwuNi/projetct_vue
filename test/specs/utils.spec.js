function reverseString(string) {
    return string.split('').reverse().join('');
  }

// test/spes/utils.spec.js
describe('first test', function() {
    it('test string reverse => true', function() {
        assert(reverseString('abc') === 'cba');
    });

    it('test string reverse => false', function() {
        assert(reverseString('abc') === 'cba1');
    });

    
});