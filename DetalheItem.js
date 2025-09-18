// DetalheItem.js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DetalheItem({ item, onVoltar }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
        <AntDesign name="arrowleft" size={24} color="#333" />
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Image 
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
        style={styles.imagemDetalhe} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.desc}>{item.desc}</Text>
          <View style={styles.detalhesAdicionais}>
            <Text style={styles.label}>Fabricante:</Text>
            <Text style={styles.valor}>{item.fabricante}</Text>
          </View>
          <View style={styles.detalhesAdicionais}>
            <Text style={styles.label}>Preço:</Text>
            <Text style={styles.valorPreco}>${item.preco.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 20,
  },
  textoVoltar: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  imagemDetalhe: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  detalhesAdicionais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  valor: {
    fontSize: 16,
    color: '#666',
  },
  valorPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
});