import { reverse, reverse2, reverse3 } from './reverseString';

describe('reverse', () => {
  it('should reverse String', () => {
    expect(reverse('Test')).toBe('tseT');
    expect(reverse('Hello Test')).toBe('tseT olleH');
  });
});

describe('reverse2', () => {
  it('should reverse String', () => {
    expect(reverse2('Test')).toBe('tseT');
    expect(reverse2('Hello Test')).toBe('tseT olleH');
  });
});

describe('reverse3', () => {
  it('should reverse String', () => {
    expect(reverse3('Test')).toBe('tseT');
    expect(reverse3('Hello Test')).toBe('tseT olleH');
  });
});
