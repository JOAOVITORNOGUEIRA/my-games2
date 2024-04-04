// src/pages/Home/index.js

import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';

import Titulo from '../../components/Titulo';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/home.jpeg')}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Titulo titulo="Resident Evil: Uma Jornada de Terror e Sobrevivência" />
                <View style={styles.paragraph}>
                    <ParagraphText>
                        Desde que entrei no mundo dos videogames em 2003, uma franquia em particular capturou minha imaginação e meu coração: Resident Evil. Ao longo dos anos, mergulhei nas profundezas assustadoras da mansão Spencer, a cidade de Raccoon, e enfrentei horrores indescritíveis nas instalações da Umbrella Corporation. Resident Evil não é apenas um jogo para mim; é uma experiência imersiva que moldou minha infância e minha paixão pelos jogos de terror.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    O que mais me cativa em Resident Evil é a atmosfera tensa e a sensação constante de perigo iminente. Cada passo adiante é um teste de nervos, nunca sabendo o que está espreitando na próxima esquina ou atrás da próxima porta trancada. E, é claro, os personagens icônicos como Leon S. Kennedy, com sua coragem e determinação, se tornaram heróis para mim. Sua jornada de novato assustado a herói endurecido é inspiradora e me faz querer enfrentar desafios de cabeça erguida, assim como ele faz.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    Além disso, a evolução da jogabilidade ao longo dos anos tem sido incrível de testemunhar. Desde os controles desajeitados e os visuais pixelados do primeiro jogo até os gráficos hiper-realistas e a jogabilidade fluida dos títulos mais recentes, Resident Evil sempre conseguiu se manter relevante, mantendo sua essência de terror e sobrevivência.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    Em suma, Resident Evil não é apenas um jogo para mim; é uma parte fundamental da minha identidade gamer. A franquia moldou meu gosto por jogos de terror e minha apreciação por histórias complexas e personagens bem desenvolvidos. A jornada de horror e sobrevivência que cada título oferece continua a me cativar até hoje.
                    </ParagraphText>
                </View>

                <Titulo titulo="Devil May Cry: A Dança Épica do Caos e Estilo" />
                <View style={styles.paragraph}>
                    <ParagraphText>
                        Entrando no mundo de Devil May Cry em 2009, fui imediatamente cativado pela ação frenética, os combates estilosos e o protagonista carismático, Dante. Desde então, cada jogo da série tem sido uma montanha-russa de adrenalina e diversão desenfreada, deixando uma marca indelével em minha jornada como jogador.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    O que mais me atrai em Devil May Cry é o estilo inigualável de seus combates. Cada movimento é uma dança mortal, cada golpe é executado com precisão e elegância. A sensação de domínio sobre os inimigos, combinada com os combos elaborados e as acrobacias aéreas, é verdadeiramente gratificante. E, claro, Dante, com sua atitude descontraída e sua habilidade excepcional, é o epítome do cool para mim.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    Além da jogabilidade emocionante, a narrativa envolvente e os personagens carismáticos tornam Devil May Cry uma experiência completa. A luta incessante contra as forças demoníacas, os encontros com vilões memoráveis e as reviravoltas surpreendentes mantêm-me sempre ansioso por mais. E a jornada de autodescoberta de Dante, explorando seu passado tumultuado e seu destino como filho de Sparda, adiciona camadas de profundidade à história.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    Ao longo dos anos, testemunhei a evolução da série, desde os gráficos impressionantes até a jogabilidade cada vez mais complexa. Mas, independentemente das mudanças, uma coisa permanece constante: o espírito rebelde e ação implacável que definem Devil May Cry.
                    </ParagraphText>
                </View>

                <View style={styles.paragraph}>
                    <ParagraphText>
                    Em resumo, Devil May Cry não é apenas uma série de jogos para mim; é uma paixão ardente que queima em meu coração gamer. Cada título da franquia é uma celebração do caos controlado, da elegância mortal e do estilo inimitável. E, assim como Dante enfrenta seus inimigos com confiança inabalável, eu abraço cada desafio que a série me lança, pronto para mostrar meu próprio estilo e habilidade.
                    </ParagraphText>
                </View>

            </ScrollView>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerButton}>
                <Text style={styles.drawerButtonText}>Menu</Text>
            </TouchableOpacity>
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
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: 70, // Ajuste para o espaçamento do topo
        paddingBottom: 20,
    },
    paragraph: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    paragraphText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'justify',
    },
    drawerButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 15,
        borderRadius: 5,
    },
    drawerButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

const ParagraphText = ({ children }) => (
    <Text style={styles.paragraphText}>{children}</Text>
);

export default HomeScreen;
