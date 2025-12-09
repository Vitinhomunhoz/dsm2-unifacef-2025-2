import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { compromissos, CompromissoType } from '../data/compromissos'; 

function TelaDia() {
  
  const hoje = new Date('2025-11-11'); 

  const hojeFormatado = hoje.toISOString().split('T')[0]; 

  const compromissosDoDia = compromissos.filter(comp => comp.data === hojeFormatado);

  const renderItem: ListRenderItem<CompromissoType> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTime}>{item.hora}</Text>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compromissos (11/11) (ter)</Text>
      
      <Text style={styles.headerText}>Victor Eduardo Alves Munhoz</Text>
      <Text style={styles.headerText}>6º semestre S.I</Text>

      <FlatList
        data={compromissosDoDia}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subheaderText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  list: {
    width: '100%',
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    alignItems: 'center',
  },
  itemTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000ff',
    marginRight: 15,
    width: 60, 
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default TelaDia;