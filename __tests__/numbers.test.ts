import { removeNonNumeric } from '../src/numbers';

describe('numbers', () => {
  it('should remove a', () => {
    const value = '1a';

    const numeric = removeNonNumeric(value)

    expect(numeric).toBe('1');
  });

  it('should return zero if empty', () => {
    const value = '';

    const numeric = removeNonNumeric(value)

    expect(numeric).toBe('0');
  });

  it('should return zero if only alpha', () => {
    const value = 'a';

    const numeric = removeNonNumeric(value)

    expect(numeric).toBe('0');
  });

  it('should keep all numbers', () => {
    const value = '12';
    const numeric = removeNonNumeric(value);
    expect(numeric).toBe('12');
  });
});
