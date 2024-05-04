import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome da Pagina</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.redButton]}>
          <Text style={styles.buttonText}>ADD IMG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.redButton]}>
          <Text style={styles.buttonText}>ADD IMG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.greenButton]}>
          <Text style={styles.buttonText}>ADD IMG</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyright}>Todos os Direitos reservados a BCARE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  redButton: {
    backgroundColor: 'red',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  copyright: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ImageMenu;