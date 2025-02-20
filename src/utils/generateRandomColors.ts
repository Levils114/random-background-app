import { isLightColor } from "./isLightColor";

interface Return {
  backgroundColor: string;
  color: string;
}

export function generateRandomColors(): Return {
  const randomHexColorInNumber = Math.floor(Math.random() * 0xFFFFFF);
  let parsedHexColor = randomHexColorInNumber.toString(16);

  if (parsedHexColor.length < 7) {
    const fullFillHexColor = parsedHexColor.padStart(6, "0");

    parsedHexColor = fullFillHexColor;
  }

  const randomColor = `#${parsedHexColor}`

  const isRandomColorLight = isLightColor(randomColor);

  const color = isRandomColorLight ? '#000000' : "#FFFFFF"

  return {
    backgroundColor: randomColor,
    color,
  }
}