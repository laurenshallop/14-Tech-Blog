const {format_date} = require('../utils/helpers')

test('format_date() returns a string', () => {
    const date = new Date('2022-07-26 11:12:08');

    expect(format_date(date)).toBe('7/26/2022');
});