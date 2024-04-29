import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Empresa = ({ nome, valorMercado }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>{nome}</Text>
      <Text style={styles.info}>{valorMercado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    width: 400,
  },
  info: {
    backgroundColor: '#02a88d',
    width: 185,
    margin: 2,
    fontSize: 18,
    paddingVertical: 10,
    paddingStart: 5
  }
});

export default Empresa;