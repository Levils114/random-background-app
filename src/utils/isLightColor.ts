export function isLightColor(color: string): boolean {
  var red = parseInt(color.substring(1, 3), 16);
  var green = parseInt(color.substring(3, 5), 16);
  var blue = parseInt(color.substring(5, 7), 16);

  const brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
  const isLightColor = brightness > 155;

  return isLightColor;
}