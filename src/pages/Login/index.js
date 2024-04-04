// LoginScreen.js

import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleEsqueciSenha = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleCriarConta = () => {
        navigation.navigate('Cadastro');
    };

    const handleEntrar = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground
            source={require('../../assets/login.jpeg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Titulo titulo="My Games" />
                <MeuInput label="E-mail" placeholder="exemplo@exemplo.com" />
                <MeuInput label="Senha" placeholder="senha" secureTextEntry={true} />
                <View style={styles.esqueciSenhaContainer}>
                    <TouchableOpacity onPress={handleEsqueciSenha}>
                        <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <SuperButton valor="Entrar" acao={handleEntrar} style={[styles.button, { backgroundColor: '#1565C0' }]} />
                </View>
                <View style={styles.cadastroContainer}>
                    <SuperButton valor="Criar Conta " acao={handleCriarConta} style={[styles.button, { backgroundColor: '#1565C0' }]} />
                </View>
            </View>
        </ImageBackground>
    );
}

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
    esqueciSenhaContainer: {
        alignSelf: 'flex-end',
        marginTop: -30,
        marginRight: 40,
    },
    esqueciSenha: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
    buttonsContainer: {
        alignSelf: 'center',
        marginTop: 20,
    },
    button: {
        marginVertical: 5,
    },
    cadastroContainer: {
        position: 'absolute',
        bottom: 20,
    },
});