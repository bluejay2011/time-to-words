# time-to-words

# Pair Programming exercise

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two'
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three'
- '2:55' > 'five to three'

## Pseudocode (as shown in interview)

- extract the hour (left side) vs minutes (right side) using colon
- left side
- 1-12 hours,
-   12 - midday
-    0 - midnight
- right side
-   < 30 - create a function to conver number to text
-   = 30 - "half past"
-   > 30 - minutes - 30 ({x} to next hour)
-   = 45 - "quarter"

## Change log since last meeting

- Fixed issues found while running the tests
- Cleanup comments
- Created `convertNumberToWords` to convert numbers to words ranging from 1-59. This is an improvement from my initial idea of writing it down in an array.
- Created tests for `convertNumberToWords`
