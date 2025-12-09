import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import compromissos from '../data/compSemana'; 

function TelaSemana() {

  const sections = compromissos.map(item => ({
    title: item.titulo,
    data: item.dados 
  }));

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Victor Eduardo Alves Munhoz</Text>
      <Text style={styles.subheaderText}>6º semestre S.I</Text>

      <Text style={styles.title}>Compromissos da Semana</Text>
      
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
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
    marginBottom: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 5,
    textAlign: 'center',
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
    color: '#333',
  }
});

export default TelaSemana;