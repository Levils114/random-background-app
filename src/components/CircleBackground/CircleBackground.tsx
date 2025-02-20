import Animated from "react-native-reanimated";
import Svg, { Circle, CircleProps } from "react-native-svg";
import { CircleCoordinates, Colors } from "../../screens/Home";

const CircleAnimated = Animated.createAnimatedComponent(Circle);

interface CircleBackgroundProps {
  colors: Colors;
  animatedProps: Partial<CircleProps>;
  circleCoordinates: CircleCoordinates;
}

export function CircleBackground({ colors, animatedProps, circleCoordinates }: CircleBackgroundProps) {
  return (
    <Svg style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
    }}>
      <CircleAnimated
        cx="50%"
        cy="50%"
        fill={colors.circleColor}
        animatedProps={animatedProps}
        {...circleCoordinates}
      />
    </Svg>
  );
}