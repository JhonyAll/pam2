import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Empresa from './Empresa';

const dados = [
  { Id: 1, Nome: "s", ValorDeMercado: '2333' }
]

export default function App() {
  const renderItem = ({ item }) => {
    <Empresa nome={item.nome} valorMercado={item.valorMercado} />
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <FlatList
          data={dados}
          renderItem={({ item }) => {
            console.log(item);
            return (<Empresa
              nome={item.Nome}
              valorMercado={item.ValorDeMercado}
            />)
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
