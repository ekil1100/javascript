const PALETTE = ['#5B8FF9', '#5AD8A6', '#F6BD16', '#E86452']

/**
 * ==========================================================================
 * @param startWithColor absent, or one of the colors in PALETTE
 */
function* getColorGenerator(
  startWithColor?: string,
): Generator<string, string> {
  let index = -1
  if (startWithColor) {
    index = PALETTE.indexOf(startWithColor) - 1
  }
  while (true) {
    index = (index + 1) % PALETTE.length
    yield PALETTE[index]
  }
}

/**
 * ==========================================================================
 * Finish the function
 * Expected console output:
 * "#5B8FF9"
 * "#5AD8A6"
 * "#F6BD16"
 * "#E86452"
 */
function main1() {
  const colorGenerator = getColorGenerator()
  for (let i = 0; i < 8; i++) {
    if (i % 2 !== 0) {
      continue
    }
    // use colorGenerator to get color, and print it
    const color = colorGenerator.next().value
    console.log(color)
  }
}
main1()

/**
 * ==========================================================================
 * Finish the function
 * Expected console output:
 * "#F6BD16"
 * "#E86452"
 * "#5B8FF9"
 * "#5AD8A6"
 */
function main2() {
  const colorGenerator = getColorGenerator('#F6BD16')
  for (let i = 0; i < 4; i++) {
    const color = colorGenerator.next().value
    console.log(color)
  }
}
main2()
