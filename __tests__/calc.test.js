import { calc } from '../src/calc.js';
describe('calc', () => {
test('add/sub/mul work', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.sub(5, 2)).toBe(3);
        expect(calc.mul(3, 4)).toBe(12);
});
test('div works', () => {
    expect (calc.div(6, 2)).toBe(3);
});
test('div by zero throws', () => {
expect(() => calc.div(1, 0)).toThrow(RangeError);
});
});
