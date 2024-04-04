// src/components/Titulo

import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Titulo = ({ titulo }) => {
    return (
        <Text style={styles.titulo}>{titulo}</Text>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center', // Alinhamento centralizado
        marginBottom: 20, // Espaçamento inferior entre os títulos
        textShadowColor: '#7E57C2', // Cor da sombra
        textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
        textShadowRadius: 2, // Raio da sombra
    },
});

export default Titulo;
