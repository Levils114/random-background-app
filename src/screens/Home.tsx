import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { generateRandomColors } from '../utils/generateRandomColors';

export default function Home() {
  const [colors, setColors] = React.useState({
    backgroundColor: '#FFFFFF',
    color: '#000000',
  });

  const getRandomBackgroundColor = useCallback(() => {
    const colors = generateRandomColors();

    setColors(colors)
  }, [])

  return (
    <Pressable style={[styles.container, { backgroundColor: colors.backgroundColor }]} onPress={getRandomBackgroundColor}>
      <Text style={{ color: colors.color }}>Hello there</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
