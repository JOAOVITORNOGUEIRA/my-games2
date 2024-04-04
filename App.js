import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import 'react-native-gesture-handler';

import LoginScreen from './src/pages/Login';
import CadastroScreen from './src/pages/Cadastro';
import ForgotPasswordScreen from './src/pages/ForgotPassword';
import HomeScreen from './src/pages/Home';
import ResidentScreen from './src/pages/Home/Resident';
import DMCScreen from './src/pages/Home/DMC';
import FantasyScreen from './src/pages/Home/Fantasy';
import GOWScreen from './src/pages/Home/GOW';
import DarkModeToggle from './src/components/DarkMode'; // Importar o componente DarkModeToggle

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Chave para armazenar o estado do modo escuro no AsyncStorage
const DARK_MODE_STORAGE_KEY = 'darkMode';

// Componente customizado para o Drawer
const CustomDrawer = ({ state, navigation, descriptors, isDarkMode, toggleDarkMode }) => {
  const handleLogout = () => {
    // Navegar para a tela de login ao clicar em "Sair"
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {/* Passar as propriedades para o DarkModeToggle */}
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </View>
        <View style={styles.userArea}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./src/assets/user.jpg')}
              style={styles.user}
            />
          </View>
          <Text style={[styles.nome, { color: '#757575' }]}>João Vitor Nogueira</Text>
          <Text style={[styles.email, { color: '#757575' }]}>joao@projeto.com.br</Text>
        </View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          return (
            <DrawerItem
              key={route.key}
              label={options.title !== undefined ? options.title : route.name}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
      {/* Adicionar o item "Sair" ao Drawer */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    paddingTop: 10,
  },
  userArea: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center', // Centraliza os itens na vertical
  },
  imageContainer: {
    marginBottom: 10, // Espaçamento inferior para a imagem
  },
  user: {
    width: 55,
    height: 55,
  },
  nome: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Cor padrão para o modo claro
  },
  email: {
    fontSize: 15,
    color: 'black', // Cor padrão para o modo claro
  },
  whiteText: {
    color: '#7E57C2', // Cor para o modo escuro
  },
  logoutContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7E57C2',
  },
});

// Componente que renderiza o DrawerNavigator
const DrawerNavigator = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Resident Evil"
        component={ResidentScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Devil May Cry"
        component={DMCScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Final Fantasy"
        component={FantasyScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="God Of War"
        component={GOWScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

// Componente principal da aplicação
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Carregar o estado do modo escuro do AsyncStorage ao iniciar o aplicativo
    const loadDarkMode = async () => {
      try {
        const darkModeValue = await AsyncStorage.getItem(DARK_MODE_STORAGE_KEY);
        if (darkModeValue !== null) {
          setIsDarkMode(JSON.parse(darkModeValue));
        }
      } catch (error) {
        console.error('Error loading dark mode state:', error);
      }
    };

    loadDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    // Alternar o estado do modo escuro
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    try {
      // Salvar o estado do modo escuro no AsyncStorage
      await AsyncStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(newDarkModeState));
    } catch (error) {
      console.error('Error saving dark mode state:', error);
    }
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        {/* Passando isDarkMode e toggleDarkMode para DrawerNavigator */}
        <Stack.Screen
          name="Home"
          component={() => <DrawerNavigator isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* Passar a propriedade toggleDarkMode para o componente DarkModeToggle */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </NavigationContainer>
  );
};

export default App;


