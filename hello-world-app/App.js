import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [textColor, setTextColor] = useState('black')

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }} style={styles.logo} />
      <Text style={styles.title}>Hello World</Text>
      <TextInput
        value={input} onChangeText={(text) => setInput(text)}
        placeholder="Input here"
        style={styles.input}
      />
      <Text style={{ color: textColor, fontSize: 18 }}>{input}</Text>
      <View style={styles.buttonLayout} >
        <Button title="Red" color="red" onPress={() => setTextColor('red')} />
        <Button title="Blue" color="blue" onPress={() => setTextColor('blue')} />
        <Button title="Green" color="green" onPress={() => setTextColor('green')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 20
  }
});
