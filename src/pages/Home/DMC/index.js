import React from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground } from 'react-native';

import Titulo from '../../../components/Titulo';

const DMCScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require('../../../assets/dmc.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Devil May Cry: A Dança Épica do Caos e Estilo" />
                    <ParagraphText>
                        Entrando no mundo de Devil May Cry em 2009, fui imediatamente cativado pela ação frenética, os combates estilosos e o protagonista carismático, Dante. Desde então, cada jogo da série tem sido uma montanha-russa de adrenalina e diversão desenfreada, deixando uma marca indelével em minha jornada como jogador.
                    </ParagraphText>
                </View>
            </ImageBackground>

      <ImageBackground
        source={require('../../../assets/dmc1.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Devil May Cry 1: A Origem de um Caçador de Demônios" />
          <ParagraphText>
            No primeiro jogo da série Devil May Cry, somos apresentados ao mundo sombrio e estiloso de Dante, um caçador de demônios habilidoso e destemido. Com uma jogabilidade inovadora, gráficos impressionantes e uma trilha sonora envolvente, Devil May Cry estabeleceu o padrão para futuros jogos de ação e aventura.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/dmc2.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Devil May Cry 2: O Despertar do Caçador Solitário" />
          <ParagraphText>
            Em Devil May Cry 2, Dante retorna para enfrentar uma nova ameaça demoníaca em uma jornada solitária repleta de mistério e perigo. Apesar de algumas críticas, o jogo ainda oferece momentos de ação intensa e desafios emocionantes para os fãs da série.
          </ParagraphText>
        </View>
      </ImageBackground>

            <ImageBackground
                source={require('../../../assets/dmc3.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Devil May Cry 3: Dante's Awakening - A Ascensão do Caçador de Demônios" />
                    <ParagraphText>
                        Em Devil May Cry 3: Dante's Awakening, somos transportados para o passado, testemunhando os eventos que moldaram Dante em quem ele é. Com uma narrativa emocionante, uma trilha sonora inesquecível e uma jogabilidade aprimorada, este jogo é considerado um dos melhores da série e um clássico dos jogos de ação.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/dmc4.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Devil May Cry 4: O Renascimento de Dante" />
                    <ParagraphText>
                        Em Devil May Cry 4, somos apresentados a um novo protagonista, Nero, que busca vingança contra a Ordem da Espada e seu líder misterioso. Com a jogabilidade clássica da série, gráficos deslumbrantes e uma trilha sonora épica, este jogo oferece uma experiência emocionante para os fãs e novatos.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/dmc5.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="Devil May Cry 5: O Retorno Triunfante da Série" />
                    <ParagraphText>
                        Em Devil May Cry 5, a série retorna à forma com uma história emocionante, gráficos de última geração e ação ininterrupta. Com Dante, Nero e um novo personagem, V, os jogadores embarcam em uma jornada para derrotar uma nova ameaça demoníaca e salvar o mundo mais uma vez.
                    </ParagraphText>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../../../assets/dmcr.jpeg')}
                style={styles.background}
            >
                <View style={styles.content}>
                    <Titulo titulo="DMC: Devil May Cry (2013) - Uma Nova Abordagem à Lenda" />
                    <ParagraphText>
                        DMC: Devil May Cry, lançado em 2013, é um reboot da série que apresenta uma nova abordagem à lendária franquia de ação. Com uma nova visão de Dante e uma narrativa reformulada, o jogo oferece uma experiência única e estilosa que combina combate frenético, gráficos deslumbrantes e uma trilha sonora envolvente. Explore o mundo distorcido de Limbo City e desvende os segredos por trás da batalha épica entre anjos e demônios.
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

export default DMCScreen;
