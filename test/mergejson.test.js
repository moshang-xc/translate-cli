const merge = require('../src/mergeObject');

let obj = {
        a: 1,
        b: 2
    },
    obj1 = {
        b: 3,
        c: 4
    },
    objobj1 = {
        a: 1,
        b: 3,
        c: 4
    },
    obj2 = {
        a: 1,
        b: {
            a: 2,
            c: 3,
            d: {
                a: 1,
                b: 2
            }
        },
        c: [1, 2, 3]
    },
    obj3 = {
        a: 3,
        b: {
            c: 4,
            d: {
                f: 3
            },
            f: [1, 2, 3]
        },
        c: [4, 3, 2, 11],
        d: {
            d: 1
        }
    },
    obj4 = {
        a: 3,
        b: {
            a: 2,
            c: 4,
            d: {
                a: 1,
                b: 2,
                f: 3
            },
            f: [1, 2, 3]
        },
        c: [1, 2, 3, 4, 11],
        d: {
            d: 1
        }
    };
let arr = [1, 2, 3, 4],
    arr1 = [3, 4, 6, 8],
    arrarr1 = [1, 2, 3, 4, 6, 8];

describe('验证[mergeJson]的正确性', () => {
    test('对象合并', () => {
        expect(merge(obj, obj1)).toEqual(objobj1);
    });
    test('数组合并', () => {
        expect(merge(arr, arr1)).toEqual(arrarr1);
    });
    test('对象深度合并', () => {
        expect(merge(obj2, obj3)).toEqual(obj4);
    });
});