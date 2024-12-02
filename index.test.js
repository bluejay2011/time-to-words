const { convertNumberToWords, convertTimeToWords } = require('./index');

describe('Convert to number to words', () => {
  it('Handles ones', () => {
    const numberInWords = convertNumberToWords(1);
    expect(numberInWords).toBe('one');
  });

  it('Handles ones - 9', () => {
    const numberInWords = convertNumberToWords(9);
    expect(numberInWords).toBe('nine');
  });

  it('Handles tens - 10', () => {
    const numberInWords = convertNumberToWords(10);
    expect(numberInWords).toBe('ten');
  });

  it('Handles tens - 20', () => {
    const numberInWords = convertNumberToWords(20);
    expect(numberInWords).toBe('twenty');
  });

  it('Handles teens - 11', () => {
    const numberInWords = convertNumberToWords(11);
    expect(numberInWords).toBe('eleven');
  });

  it('Handles teens - 17', () => {
    const numberInWords = convertNumberToWords(17);
    expect(numberInWords).toBe('seventeen');
  });

  it('Handles more than 20s - 28', () => {
    const numberInWords = convertNumberToWords(28);
    expect(numberInWords).toBe('twenty eight');
  });

  it('Handles more than 20s - 35', () => {
    const numberInWords = convertNumberToWords(35);
    expect(numberInWords).toBe('thirty five');
  });

  it('Handles more than 20s - 53', () => {
    const numberInWords = convertNumberToWords(53);
    expect(numberInWords).toBe('fifty three');
  });
});

// - '0:00' > 'midnight'
// - '12:00' > 'midday'
// - '2:00' > 'two o'clock'
// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two'
// - '2:30' > 'half past two'
// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three'
// - '2:55' > 'five to three'

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles exact time', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles time before half time - 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('Handles time before half time - 2:11', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });

  it('Handles quarter time', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles 30 - 2:30', () => {
    const timeInWords = convertTimeToWords('2:30');
    expect(timeInWords).toBe('half past two');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles time after 30 mins - 2:33', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });

  it('Handles time after 30 mins - 2:40', () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe('twenty to three');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 30 mins - 2:55', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });
});
