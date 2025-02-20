import React, { useCallback } from 'react';
import { Dimensions, GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';
import { generateRandomColors } from '../utils/generateRandomColors';
import { useAnimatedProps, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { getPressCoordinates } from '../utils/getPressCoordinates';
import { CircleBackground } from '../components/CircleBackground/CircleBackground';

import { StatusBar } from 'expo-status-bar';
export interface Colors {
  circleColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface CircleCoordinates {
  translateX: number,
  translateY: number,
}

export default function Home() {
  const circleRadius = useSharedValue<number>(0);

  const [colors, setColors] = React.useState<Colors>({
    circleColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  });
  const [circleCoordinates, setCircleCoordinates] = React.useState<CircleCoordinates>({
    translateX: 0,
    translateY: 0,
  });

  const isPressabledDisabled = colors.backgroundColor !== colors.circleColor;
  const statusBarStyle = colors.textColor === '#FFFFFF' ? 'light' : 'dark';

  const animatedProps = useAnimatedProps(() => ({
    r: circleRadius.value,
  }));

  const updateColors = (colors: Partial<Colors>) => {
    setColors(prevValue => ({
      ...prevValue,
      ...colors
    }));
  }

  const animateCircleToFullFillScreen = (backgroundColor: string) => {
    const animationDuration = 500;
    const screenHeight = Dimensions.get('screen').height;

    circleRadius.value = withSequence(
      withTiming(screenHeight, { duration: animationDuration, }),
      withTiming(0, { duration: 0, })
    );

    setTimeout(() => {
      updateColors({
        backgroundColor
      });
    }, animationDuration - 100)
  }

  const getRandomBackgroundColor = useCallback((event: GestureResponderEvent) => {
    const pressCoordinates = getPressCoordinates(event);
    setCircleCoordinates(pressCoordinates)

    const colors = generateRandomColors();
    updateColors({
      textColor: colors.textColor,
      circleColor: colors.backgroundColor
    })

    animateCircleToFullFillScreen(colors.backgroundColor);
  }, []);


  return (
    <>
      <StatusBar style={statusBarStyle} />
      <Pressable
        onPress={getRandomBackgroundColor}
        disabled={isPressabledDisabled}
        style={[styles.container, { backgroundColor: colors.backgroundColor }]}
      >
        <CircleBackground
          colors={colors}
          animatedProps={animatedProps}
          circleCoordinates={circleCoordinates}
        />

        <Text style={{ color: colors.textColor }}>Hello there</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
});
