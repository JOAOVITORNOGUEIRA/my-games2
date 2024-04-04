import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import HomeScreen from './src/pages/Home';
import ResidentScreen from './src/pages/Home/Resident';
import DMCScreen from './src/pages/Home/DMC';
import LoginScreen from './src/pages/Login';
import CadastroScreen from './src/pages/Cadastro';
import ForgotPasswordScreen from './src/pages/ForgotPassword';
import { useDarkModeContext } from './src/contexts';
import styles from './styles'; // Importe os estilos aqui

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Definição do componente DarkModeToggle
const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <TouchableOpacity style={darkModeStyles.container} onPress={toggleDarkMode}>
      <Image
        source={isDarkMode ? require('./src/assets/sun.jpeg') : require('./src/assets/moon.jpeg')}
        style={darkModeStyles.icon}
      />
    </TouchableOpacity>
  );
};

// Estilos do componente DarkModeToggle
const darkModeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const handleLogout = () => {
    // Implemente a lógica para logout aqui
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </View>
        <View style={styles.userArea}>
          <Image
            source={require('./src/assets/user.jpg')}
            style={styles.user}
          />
          <Text style={[styles.nome, isDarkMode && styles.whiteText]}>Sujeito Programador</Text>
          <Text style={[styles.email, isDarkMode && styles.whiteText]}>informações</Text>
        </View>
        {props.state.routes.map((route, index) => (
          <DrawerItem
            key={route.key}
            label={route.name}
            onPress={() => navigation.navigate(route.name)}
          />
        ))}
        <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};


const mainStyles = StyleSheet.create({
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
  },
  user: {
    width: 55,
    height: 55,
  },
  nome: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  logoutContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const MainStack = () => {
  return (
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
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
    </Drawer.Navigator>
  );
};

export default MainStack;
