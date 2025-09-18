// App.js
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import DetalheItem from './DetalheItem';

const perifericos = [
  {
    id: 1,
    nome: 'Teclado Mecânico Gamer',
    fabricante: 'HyperX',
    preco: 129.99,
    desc: 'Teclado com switches mecânicos, iluminação RGB personalizável e design robusto para alta performance em jogos.',
    imagem:
     require('./assets/images/teclado.png')
  },
  {
    id: 2,
    nome: 'Mouse Sem Fio Vertical',
    fabricante: 'Logitech',
    preco: 79.5,
    desc: 'Mouse ergonômico que reduz a tensão no pulso. Ideal para longas horas de trabalho, com conexão sem fio confiável.',
    imagem:
    require('./assets/images/Mouse.png')
  },
  {
    id: 3,
    nome: 'Monitor UltraWide 29"',
    fabricante: 'LG',
    preco: 299.0,
    desc: 'Monitor com tela ultrawide, ideal para multitarefas e uma experiência imersiva em filmes e jogos. Resolução Full HD.',
    imagem:
    require('./assets/images/Monitor.png'),
  },
  {
    id: 4,
    nome: 'Headset Gamer com Microfone',
    fabricante: 'Razer',
    preco: 99.99,
    desc: 'Fone de ouvido com áudio surround 7.1, microfone com cancelamento de ruído e almofadas de gel refrescante.',
    imagem:
    require('./assets/images/Fone.png')
  },
  {
    id: 5,
    nome: 'Webcam Full HD',
    fabricante: 'Logitech',
    preco: 55.0,
    desc: 'Webcam com resolução 1080p, foco automático e correção de luz. Perfeita para videoconferências e streaming.',
    imagem:
    require('./assets/images/Webcam.webp')
  },
  {
    id: 6,
    nome: 'Mouse Pad Grande',
    fabricante: 'Corisair',
    preco: 25.0,
    desc: 'Mouse pad estendido para teclado e mouse. Superfície otimizada para sensores de mouse, com base de borracha antiderrapante.',
    imagem:
    require('./assets/images/Mousepad.jpg')
  },
];

export default function App() {
  const [itemSelecionado, setItemSelecionado] = useState(null);

  // Função para renderizar cada item na FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setItemSelecionado(item)}>
      <Image 
       source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
      style={styles.imagemItem} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.fabricante}>{item.fabricante}</Text>
        <Text style={styles.preco}>${item.preco.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (itemSelecionado) {
    return <DetalheItem item={itemSelecionado} onVoltar={() => setItemSelecionado(null)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Periféricos Tecnológicos</Text>
      <FlatList
        data={perifericos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  lista: {
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagemItem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  fabricante: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
    marginTop: 6,
  },
});