import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Empresa from './Empresa';
import axios from 'axios';
import { useEffect, useState } from 'react';


const asdados = [{ "Id": 0, "Nome": "Antartica", "ValorDeMercado": 491 }, { "Id": 1, "Nome": "BHP Billiton", "ValorDeMercado": 4320.8 }, { "Id": 2, "Nome": "Vale do Rio Doce", "ValorDeMercado": 6000 }, { "Id": 3, "Nome": "Shenhua", "ValorDeMercado": 2538.4700000000003 }, { "Id": 4, "Nome": "Rio Tinto", "ValorDeMercado": 1703.7700000000002 }, { "Id": 5, "Nome": "Barrick", "ValorDeMercado": 2224.23 }, { "Id": 6, "Nome": "PotashCorp", "ValorDeMercado": 3103.12 }, { "Id": 7, "Nome": "Goldcorp", "ValorDeMercado": 402.62 }, { "Id": 8, "Nome": "Newmont", "ValorDeMercado": 849.4300000000001 }, { "Id": 9, "Nome": "Anglo American", "ValorDeMercado": 1620.3 }, { "Id": 10, "Nome": "Mosaic", "ValorDeMercado": 4855.99 }, { "Id": 11, "Nome": "Zijin", "ValorDeMercado": 2690.6800000000003 }, { "Id": 12, "Nome": "Chinalco", "ValorDeMercado": 1350.25 }, { "Id": 13, "Nome": "Kinross", "ValorDeMercado": 4124.400000000001 }, { "Id": 14, "Nome": "NMDC", "ValorDeMercado": 1870.71 }, { "Id": 15, "Nome": "Southern Copper", "ValorDeMercado": 3962.37 }, { "Id": 16, "Nome": "AngloGold Ashanti", "ValorDeMercado": 618.66 }, { "Id": 17, "Nome": "Freeport-McMoRan", "ValorDeMercado": 4826.53 }, { "Id": 18, "Nome": "China Coal", "ValorDeMercado": 1541.74 }, { "Id": 19, "Nome": "Newcrest", "ValorDeMercado": 873.9799999999999 }, { "Id": 20, "Nome": "CSN", "ValorDeMercado": 4399.360000000001 }, { "Id": 111, "Nome": "111", "ValorDeMercado": 545.01 }]

export default function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};

fetch('http://localhost:3000/empresa', options)
  .then(response => response.json())
  .then(response => setDados(response))
  .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    // console.log(dados)
    // let as = dados
    // as.map(e => console.log(e))
    // console.log(dados.Nome)
  }, [dados])

  const renderItem = (item) => {
    // console.log(item.nome)
    return <Empresa nome={item.Nome} valorMercado={item.ValorDeMercado} />
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScrollView>
        <FlatList
          data={dados}
          renderItem={({ item }) => renderItem(item)}
        />
      </ScrollView>

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
