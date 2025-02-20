export function isLightColor(color: string): boolean {
  const redHexColor = color.substring(1, 3);
  const greenHexColor = color.substring(3, 5);
  const blueHexColor = color.substring(5, 7);

  var redColorInNumber = parseInt(redHexColor, 16);
  var greenColorInNumber = parseInt(greenHexColor, 16);
  var blueColorInNumber = parseInt(blueHexColor, 16);

  const brightness = (redColorInNumber + greenColorInNumber + blueColorInNumber) / 710;

  const isLightColor = brightness > 0.5;
  return isLightColor;
}