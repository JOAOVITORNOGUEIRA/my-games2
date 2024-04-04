import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SuperButton = ({ valor, acao }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={acao}>
        <Text style={styles.texto}>{valor}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 12,
    width: '98%',
    borderRadius: 4,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  texto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});

export default SuperButton;
