import { paramStringFromObject } from 'lib/util';

describe('Util', () => {

  describe('paramStringFromObject', () => {

    it('should return a param string from an object', () => {

      const paramsObject = {
        one: '1111',
        two: '2222',
        three: '3333'
      }

      const expected = '&one=1111&two=2222&three=3333';

      expect(paramStringFromObject(paramsObject)).toBe(expected);

    })

  });

})