import React from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground } from 'react-native';

import Titulo from '../../../components/Titulo';

const ResidentScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../../assets/re.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil: Uma Jornada de Terror e Sobrevivência" />
          <ParagraphText>
            Desde que entrei no mundo dos videogames em 2003, uma franquia em particular capturou minha imaginação e meu coração: Resident Evil. Ao longo dos anos, mergulhei nas profundezas assustadoras da mansão Spencer, a cidade de Raccoon, e enfrentei horrores indescritíveis nas instalações da Umbrella Corporation. Resident Evil não é apenas um jogo para mim; é uma experiência imersiva que moldou minha infância e minha paixão pelos jogos de terror.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re1.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 1: A Origem do Pesadelo" />
          <ParagraphText>
            No primeiro jogo da série Resident Evil, somos apresentados à equipe Bravo do S.T.A.R.S. enviada para investigar os assassinatos bizarros em Raccoon City. Presos em uma mansão assombrada por horrores indescritíveis, os membros da equipe enfrentam zumbis, armadilhas mortais e segredos obscuros enquanto lutam para sobreviver.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re2.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 2: A Luta Contra os Horrores Renascidos" />
          <ParagraphText>
            A sequência do jogo original levou a experiência de terror a novas alturas. Com Leon Kennedy e Claire Redfield como protagonistas, Resident Evil 2 ofereceu um mundo ainda mais sombrio e perigoso, com zumbis mais assustadores, enigmas desafiadores e um enredo emocionante que deixou os jogadores ansiosos por mais.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re3.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 3: Nemesis - A Perseguição Implacável" />
          <ParagraphText>
            Em Resident Evil 3: Nemesis, a cidade de Raccoon está à beira do colapso total. Jill Valentine, uma das poucas sobreviventes dos horrores da mansão Spencer, enfrenta uma nova ameaça implacável em forma de uma arma biológica altamente inteligente e letal conhecida como Nemesis. Enfrente seus medos enquanto corre pela cidade devastada em busca de uma rota de fuga, lutando contra zumbis e criaturas monstruosas ao longo do caminho.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re4.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 4: O Horror Renovado" />
          <ParagraphText>
            Em Resident Evil 4, Leon Kennedy é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos, que foi sequestrada por uma seita misteriosa em uma vila remota da Europa. Ao chegar lá, ele se depara com uma ameaça biológica ainda mais sinistra do que jamais imaginou. Explore locais sombrios e enfrenta horrores inimagináveis enquanto tenta salvar a vida da jovem Ashley Graham e desvendar os segredos por trás desse pesadelo.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re5.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 5: A Luta Contra a Ameaça Global" />
          <ParagraphText>
            Em Resident Evil 5, Chris Redfield e Sheva Alomar unem forças para deter uma ameaça biológica que se espalha pelo continente africano. Com jogabilidade cooperativa intensa e uma trama cheia de reviravoltas, o jogo oferece uma experiência de ação e suspense emocionante para os fãs da série.
          </ParagraphText>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require('../../../assets/re6.jpeg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Titulo titulo="Resident Evil 6: O Confronto Épico entre Heróis e Horrores" />
          <ParagraphText>
            Em Resident Evil 6, múltiplos protagonistas, incluindo Chris Redfield, Leon Kennedy e Ada Wong, enfrentam uma conspiração global que ameaça desencadear uma nova catástrofe biológica. Com uma jogabilidade repleta de ação e uma narrativa complexa, o jogo oferece uma experiência cinematográfica de grande escala para os fãs da série.
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

export default ResidentScreen;
