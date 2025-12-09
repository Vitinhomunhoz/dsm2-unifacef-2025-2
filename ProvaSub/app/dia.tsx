import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import compromissos from '../data/compDia'; 

function TelaDia() {
  
  const renderItem = ({ item }: { item: { id: number, descr: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.descr}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compromissos</Text>
      
      <Text style={styles.headerText}>Victor Eduardo Alves Munhoz</Text>
      <Text style={styles.subheaderText}>6º semestre S.I</Text>

      <FlatList
        data={compromissos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default TelaDia;