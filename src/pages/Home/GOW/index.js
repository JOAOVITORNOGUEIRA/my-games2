import React from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground } from 'react-native';

import Titulo from '../../../components/Titulo';

const GOWScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require('../../../assets/gow.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War: Uma Saga de Vingança e Redenção nos Reinos dos Deuses" />
                    <ParagraphText>
                        A saga de God of War narra a jornada épica de Kratos, um guerreiro espartano determinado a se vingar dos deuses que o traíram. Ao longo de cinco jogos emocionantes, os jogadores são levados a um mundo de mitologia grega repleto de perigos, desafios e momentos épicos. Desde sua estreia em 2005, God of War se estabeleceu como uma das franquias mais icônicas e influentes da história dos videogames, conquistando o coração dos jogadores com sua jogabilidade intensa, narrativa envolvente e personagens inesquecíveis.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/gow1.jpg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War 1: A Ascensão de Kratos ao Olimpo" />
                    <ParagraphText>
                        No primeiro jogo da série, testemunhamos a ascensão de Kratos, um guerreiro espartano consumido pela sede de vingança contra os deuses do Olimpo. Com sua espada do caos e sua determinação inabalável, ele embarca em uma jornada épica para destruir Ares, o deus da guerra, e se tornar o novo deus do Olimpo. Com visuais deslumbrantes, combates frenéticos e uma narrativa emocionante, God of War 1 estabeleceu o padrão para os futuros jogos da série.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/gow2.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War 2: A Fúria de Kratos Contra os Deuses Traiçoeiros" />
                    <ParagraphText>
                        Em God of War 2, Kratos continua sua busca implacável por vingança contra os deuses do Olimpo, enfrentando desafios cada vez mais perigosos e inimigos formidáveis. Com sua ira crescente e seu desejo insaciável de poder, ele desafia até mesmo os deuses mais poderosos em sua busca por justiça. Com visuais ainda mais impressionantes, combates mais intensos e uma história ainda mais cativante, God of War 2 elevou a franquia a novas alturas de grandeza.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/gow3.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War 3: A Ira de Kratos Contra o Olimpo em Chamas" />
                    <ParagraphText>
                        God of War 3 nos leva ao clímax da jornada de Kratos, enquanto ele lança sua fúria total contra os deuses do Olimpo em uma batalha épica pelo controle do mundo. Com sua força imensa e sua habilidade incomparável, ele enfrenta os titãs e os deuses em um confronto final que decidirá o destino de toda a humanidade. Com visuais deslumbrantes que aproveitam ao máximo o poder do PlayStation 3, combates ainda mais épicos e uma conclusão satisfatória para a história de Kratos, God of War 3 é um verdadeiro épico dos videogames.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/gow4.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War 4: O Renascimento de Kratos em Midgard" />
                    <ParagraphText>
                        Em God of War 4, testemunhamos o renascimento de Kratos em um novo mundo, longe dos deuses gregos e imerso na mitologia nórdica. Agora acompanhado por seu filho, Atreus, Kratos enfrenta novos desafios e inimigos enquanto luta para deixar seu passado de violência para trás e se tornar um pai melhor. Com visuais deslumbrantes que aproveitam ao máximo o poder do PlayStation 4, uma jogabilidade revigorada e uma história emocionante que explora temas de paternidade, redenção e perdão, God of War 4 é uma obra-prima moderna dos videogames.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/gow5.jpg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="God of War 5: O Legado de Kratos Continua em Outros Mundos" />
                    <ParagraphText>
                        Ainda não lançado, mas altamente antecipado, God of War 5 promete continuar a jornada de Kratos e Atreus enquanto eles exploram novos mundos e enfrentam novos desafios. Com visuais ainda mais impressionantes, combates ainda mais épicos e uma história que promete ser ainda mais emocionante, God of War 5 está destinado a ser mais um marco na série e um ponto alto na história dos videogames. Os fãs mal podem esperar para ver para onde a jornada de Kratos os levará a seguir.
                    </ParagraphText>
                </View>
            </ImageBackground>


        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: 800, // Ajuste a altura conforme necessário
    },
    content: {
        paddingHorizontal: 20,
    },
    paragraphText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'justify',
    },
});

const ParagraphText = ({ children }) => (
    <Text style={styles.paragraphText}>{children}</Text>
);

export default GOWScreen;
