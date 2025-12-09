import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

function TelaInicio() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Agenda</Text>
    <Text style={styles.headerText}>Victor Eduardo Alves Munhoz</Text>
    <Text style={styles.subheaderText}>6º semestre S.I</Text>

      <View style={styles.buttonContainer}>
        <Link href="/dia" asChild>
          <Button title="Ver Compromissos do Dia" color="#000" />
        </Link>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/semana" asChild>
          <Button title="Ver Compromissos da Semana" color="#000" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subheaderText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666',
  },
  buttonContainer: {
    width: 400 
  },
});

export default TelaInicio;