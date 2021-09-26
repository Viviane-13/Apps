import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Header from './src/components/Header';
import List from './src/components/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      name: 'Viviane Oliveira',
      description: 'Mais um dia de muitos bugs :)',
      imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublication: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 32,
    },
    {
      id: '2',
      name: 'Marcio Silva',
      description: 'Bora Trabalhar!!!',
      imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublication: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      name: 'Matheus Fraga',
      description: 'Dia muito produtivo...',
      imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublication: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 7,
    },
    {
      id: '4',
      name: 'Camila Fonseca',
      description: 'Dia muito produtivo...',
      imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublication: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1,
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
