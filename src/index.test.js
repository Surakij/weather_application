import {sum} from "./index";

describe ('sum', () => {
    it ('should return main of numbers a & b', function () {
        expect (sum(1, 2) ).toBe(3)
    });
});