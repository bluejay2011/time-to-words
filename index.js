// Convenient method to convert number to words for the range of 1-59
function convertNumberToWords(num) {
  const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'fifty'];

  const divisor = Math.floor(num / 10);
  const remainder = num % 10;

  if (num === 0 || num > 59) {
    return new Error('Outside clock time conversion');
  }

  // Handle scenario for 11-19
  if (num > 10 && num < 20) {
    return teens[remainder - 1];
  }

  // Handle scenarios for ones
  if (num < 10) {
    return words[num - 1];
  }

  // Handle scenarios for tens
  if (remainder === 0) {
    return tens[divisor - 1];
  }

  return `${tens[divisor - 1]} ${words[remainder - 1]}`;
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    // - '0:00' > 'midnight'
    return 'midnight';
  }

  if (time === '12:00') {
    // - '12:00' > 'midday'
    return 'midday';
  }

  const times = time.split(':');

  const hour = parseInt(times[0], 10);
  const minutes = parseInt(times[1], 10);

  // - '2:00' > 'two o'clock'
  if (minutes === 0) {
    return `${convertNumberToWords(hour)} o'clock`;
  }

  // - '2:15' > 'quarter past two'
  if (minutes === 15) {
    return `quarter past ${convertNumberToWords(hour)}`;
  }

  // - '2:30' > 'half past two'
  if (minutes === 30) {
    return `half past ${convertNumberToWords(hour)}`;
  }

  // - '2:45' > 'quarter to three'
  if (minutes === 45) {
    return `quarter to ${convertNumberToWords(hour + 1)}`;
  }

  // - '2:03' > 'three past two'
  // - '2:11' > 'eleven past two'
  if (minutes < 30) {
    return `${convertNumberToWords(minutes)} past ${convertNumberToWords(hour)}`;
  }

  // - '2:33' > 'twenty seven to three'
  // - '2:40' > 'twenty to three'
  // - '2:55' > 'five to three'
  if (minutes > 30) {
    return `${convertNumberToWords((30 - (minutes - 30)))} to ${convertNumberToWords(hour + 1)}`;
  }
}

module.exports = { convertTimeToWords, convertNumberToWords };
