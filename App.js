
import { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

  const [numb1, setNumb1] = useState("");
  const [numb2, setNumb2] = useState("");

  const plusOnChange = () => {
    Alert.alert("result: " + (Number(numb1) + Number(numb2)));
  }

  const minusOnChange = () => {
    Alert.alert("result:" + (Number(numb1) - Number(numb2)));
  }

  return (
    <View style={styles.container}>
      <TextInput style = {styles.input} onChangeText={numb1 => setNumb1(numb1)} value={numb1} inputMode='numeric' />
      <TextInput style = {styles.input} onChangeText={numb2 => setNumb2(numb2)} value={numb2} inputMode='numeric' />
      <View style={styles.buttonContainer}>
      <Button onPress={plusOnChange} title="+" />
        <Button onPress={minusOnChange} title="-" />
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
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});