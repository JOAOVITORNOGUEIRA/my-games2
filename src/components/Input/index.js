import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';

const MeuInput = ({ label, placeholder, secureTextEntry }) => {
  return (
    <SafeAreaView>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'white' }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // Adiciona a propriedade secureTextEntry
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 42,
    marginBottom: 42,
    marginTop: 3,
    padding: 12,
    width: 300,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#FAFAFA',
    textShadowColor: '#5C6BC0',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 8,
  },
});

export default MeuInput;
