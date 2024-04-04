// ForgotPasswordScreen.js

import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

const ForgotPasswordScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/login.jpeg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Titulo titulo="Esqueci a Senha" />
                <MeuInput label="E-mail" placeholder="exemplo@exemplo.com" />
                <MeuInput label="Confirmar E-mail" placeholder="Confirme seu e-mail" />
                <MeuInput label="Nova Senha" placeholder="Digite sua nova senha" secureTextEntry={true} />
                <MeuInput label="Confirmar Nova Senha" placeholder="Confirme sua nova senha" secureTextEntry={true} />
                <SuperButton valor="Alterar Senha" acao={() => console.log('Alterar Senha')} style={[styles.button, { backgroundColor: '#1565C0' }]} />
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

export default ForgotPasswordScreen;
