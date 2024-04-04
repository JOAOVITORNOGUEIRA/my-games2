// styles.js

import { StyleSheet } from 'react-native';

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
    alignItems: 'center',
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
    color: '#7E57C2',
  },
});

export default styles;
