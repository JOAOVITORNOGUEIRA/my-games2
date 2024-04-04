import React from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground } from 'react-native';

import Titulo from '../../../components/Titulo';

const FantasyScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require('../../../assets/ff0.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy Saga: Uma Jornada Épica Através de Mundos Fantásticos" />
                    <ParagraphText>
                        Nenhum outro nome ressoa tão alto no mundo dos RPGs quanto Final Fantasy. Esta icônica série de jogos levou os jogadores a aventuras épicas em mundos vastos e deslumbrantes, repletos de personagens memoráveis, histórias emocionantes e sistemas de combate inovadores. Desde sua estreia em 1987, Final Fantasy tem cativado gerações de jogadores, estabelecendo-se como uma das franquias mais reverenciadas e influentes da história dos videogames.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/ff7.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy 7: A Jornada de Cloud Strife para Salvar o Mundo de Midgar" />
                    <ParagraphText>
                        Final Fantasy 7 é amplamente considerado como um dos melhores jogos da série e um marco na história dos RPGs. Com sua trama complexa, personagens marcantes e um mundo vasto e detalhado, o jogo segue Cloud Strife e seu grupo de aliados enquanto lutam contra a maléfica corporação Shinra e seu líder, Sephiroth. Com uma combinação única de elementos de ficção científica e fantasia, Final Fantasy 7 continua a ser uma experiência inesquecível para os jogadores de todas as idades.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/ff10.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy 10: Uma Jornada Espiritual para Salvar Spira do Sin" />
                    <ParagraphText>
                        Final Fantasy 10 nos leva a uma jornada emocionante pelo mundo de Spira, onde acompanhamos Tidus e Yuna em sua missão para derrotar o temível monstro conhecido como Sin. Com uma história envolvente que aborda temas de destino, sacrifício e redenção, o jogo oferece uma experiência profundamente emocional. Com visuais deslumbrantes, um sistema de combate estratégico e uma trilha sonora arrebatadora, Final Fantasy 10 é uma aventura que fica gravada na memória dos jogadores para sempre.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/ff12.jpg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy 12: Um Conto de Política, Magia e Aventura em Ivalice" />
                    <ParagraphText>
                        Final Fantasy 12 nos transporta para o mundo de Ivalice, onde acompanhamos o jovem Vaan e sua equipe improvável em uma jornada para derrotar o império arcano. Com uma narrativa complexa que aborda temas de poder, ambição e liberdade, o jogo oferece uma experiência rica e envolvente. Com um sistema de combate inovador e um mundo vasto e aberto para explorar, Final Fantasy 12 é um marco na série e um dos jogos mais aclamados de todos os tempos.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/ff13.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy 13: Uma Odisseia de Esperança e Desespero em Cocoon" />
                    <ParagraphText>
                        Final Fantasy 13 nos apresenta ao mundo de Cocoon, onde acompanhamos Lightning e seu grupo de aliados em sua luta para salvar seu lar da destruição iminente. Com uma narrativa emocionante que aborda temas de liberdade, determinação e sacrifício, o jogo oferece uma experiência intensamente cinematográfica. Com visuais deslumbrantes e um sistema de combate dinâmico, Final Fantasy 13 é uma jornada inesquecível através de um mundo de fantasia deslumbrante.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/ff15.png')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Final Fantasy 15: Uma Viagem Épica de Amizade e Redenção em Eos" />
                    <ParagraphText>
                        Final Fantasy 15 nos leva a uma jornada épica pelo mundo de Eos, onde acompanhamos o príncipe Noctis e seus amigos em sua luta para retomar seu reino e derrotar as forças das trevas. Com uma narrativa emocionante que aborda temas de amizade, sacrifício e redenção, o jogo oferece uma experiência única e envolvente. Com visuais deslumbrantes, um mundo aberto vasto e dinâmico, e um sistema de combate emocionante, Final Fantasy 15 é uma aventura que captura o coração dos jogadores e os transporta para um mundo de fantasia como nenhum outro.
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

export default FantasyScreen;
