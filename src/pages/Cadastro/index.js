// CadastroScreen.js

import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

const CadastroScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/login.jpeg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Titulo titulo="Cadastro" />
                <MeuInput label="Nome Completo" placeholder="Digite seu nome completo" />
                <MeuInput label="E-mail" placeholder="exemplo@exemplo.com" />
                <MeuInput label="Telefone" placeholder="(00) 00000-0000" />
                <MeuInput label="Senha" placeholder="Digite sua senha" secureTextEntry={true} />
                <MeuInput label="Confirmar Senha" placeholder="Confirme sua senha" secureTextEntry={true} />
                <SuperButton valor="Cadastrar" acao={() => console.log('Cadastrar')} style={[styles.button, { backgroundColor: '#1565C0' }]} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    button: {
        marginVertical: 10,
    },
});

export default CadastroScreen;
