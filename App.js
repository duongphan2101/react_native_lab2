import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);
    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResult('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2: ax² + bx + c = 0</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />

      <Text style={{marginVertical: 20, color: 'red'}}>{result}</Text>
      <Button title="Giải" onPress={solveEquation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
    width: '80%',
  },
});
