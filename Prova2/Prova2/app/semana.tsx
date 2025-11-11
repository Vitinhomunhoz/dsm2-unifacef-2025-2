import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { compromissos, CompromissoType } from '../data/compromissos'; 

function TelaSemana() {

  const hoje = new Date('2025-11-10'); 
  const seteDiasDepois = new Date(hoje);
  seteDiasDepois.setDate(hoje.getDate() + 7);

  const compromissosDaSemana = compromissos.filter(comp => {
    const dataCompromisso = new Date(`${comp.data}T00:00:00`); 
    return dataCompromisso >= hoje && dataCompromisso < seteDiasDepois;
  }).sort((a, b) => {
    if (a.data === b.data) {
      return a.hora.localeCompare(b.hora);
    }
    return a.data.localeCompare(b.data);
  });

  const groupedData = compromissosDaSemana.reduce((acc, compromisso) => {
    const { data } = compromisso;
    if (!acc[data]) {
      acc[data] = [];
    }
    acc[data].push(compromisso);
    return acc;
  }, {} as Record<string, CompromissoType[]>);

  const sections = Object.keys(groupedData).map(date => {
    const dateObj = new Date(`${date}T00:00:00`);
    const dayName = dateObj.toLocaleDateString('pt-BR', { weekday: 'long' });
    const formattedDate = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    return {
      title: `${capitalizedDayName} (${formattedDate})`,
      data: groupedData[date],
    };
  });

  const renderItem = ({ item }: { item: CompromissoType }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTime}>{item.hora}</Text>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Victor Eduardo Alves Munhoz</Text>
      <Text style={styles.headerText}>6º semestre S.I</Text>
        <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
    textAlign: 'center',
    borderRadius: 5,
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

export default TelaSemana;