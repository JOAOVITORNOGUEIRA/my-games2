import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleDarkMode}>
      <Image
        source={isDarkMode ? require('../../assets/sun.jpeg') : require('../../assets/moon.jpeg')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default DarkModeToggle;
