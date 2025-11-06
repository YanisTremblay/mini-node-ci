import { sum } from '../src/sum.js';
describe('sum', () => {
 test('additionne deux nombres', () => {
 expect(sum(2, 3)).toBe(5);
 });
 test('gère les nombres négatifs', () => {
 expect(sum(-2, 5)).toBe(3);
 });
 test('rejette les valeurs non numériques', () => {
 expect(() => sum('2', 3)).toThrow(TypeError);
 });
});
