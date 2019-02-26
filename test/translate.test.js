const excel2json = require('../src/excel2json');
const ExtractFile = require('../src/ExtractFile');

let extract = new ExtractFile({
    baseReadPath: 'D:/Git/translate/test/TestFile/test/js',
    baseWritePath: 'D:/Git/translate/test/TestFile/output',
    onlyZH: false,
    isTranslate: true,
    config_hong_path: 'D:/Git/translate/test/TestFile/config/index.js',
    transWords: {}
});

it('验证翻译JS的正确性', () => {
    expect.assertions(1);
    return excel2json({
        excelPath: 'D:/Git/translate/test/TestFile/testData/js/translate.xlsx',
        outPath: 'D:/Git/translate/test/TestFile/output',
        sheetName: '',
        key: 'CN',
        value: 'EN'
    }).then(data => {
        extract.setAttr('transWords', data.EN);
        return extract.scanFile();
    }).then(data => {
        return expect(data).toEqual([]);
    });
});

it('验证翻译HTML的正确性', () => {
    expect.assertions(1);
    return excel2json({
        excelPath: 'D:/Git/translate/test/TestFile/testData/html/translate.xlsx',
        outPath: '',
        sheetName: '',
        key: 'EN',
        value: 'CN'
    }).then(data => {
        extract.setAttr({
            transWords: data.CN,
            baseReadPath: 'D:/Git/translate/test/TestFile/test/html'
        });
        return extract.scanFile();
    }).then(data => {
        return expect(data).toEqual([]);
    });
});