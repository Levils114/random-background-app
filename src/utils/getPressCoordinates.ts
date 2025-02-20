import { Dimensions, GestureResponderEvent } from "react-native";

interface Return {
  translateX: number;
  translateY: number;
}

export function getPressCoordinates(event: GestureResponderEvent): Return {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;

  return {
    translateX: event.nativeEvent.locationX - screenWidth / 2,
    translateY: event.nativeEvent.locationY - screenHeight / 2,
  }
}