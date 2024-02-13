import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const CalculatorApp = ({ navigation }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
    setData([...data, { key: `${num1} + ${num2} = ${sum}` }]);
  };

  const handleSubtract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference);
    setData([...data, { key: `${num1} - ${num2} = ${difference}` }]);
  };

  const handleDivide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const divide = parseFloat(num1) / parseFloat(num2);
    setResult(divide);
    setData([...data, { key: `${num1} / ${num2} = ${divide}` }]);
  };

  const handleMultiplication = () =>{
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    const multiplication = parseFloat(num1) * parseFloat(num2);
    setResult(multiplication);
    setData([...data, { key: `${num1} * ${num2} = ${multiplication}` }]);
  }

  const handleClear = () => {
    setData([]);
  };
  const handleHistory = () => {
    navigation.navigate("History", { historyData: data });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number 1"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number 2"
        value={number2}
        onChangeText={setNumber2}
      />

      <View>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={handleAdd} />
          <Button title="-" onPress={handleSubtract} />
          <Button title="/" onPress={handleDivide} />
          <Button title="*" onPress={handleMultiplication} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="CLEAR" onPress={handleClear} />
          <Button title="History" onPress={handleHistory} />
        </View>
      </View>

      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 8,
    width: "80%",
    paddingHorizontal: 8,
  },
  resultText: {
    fontSize: 20,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    width: 180,
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 20,
    padding: 10,
    width: 200,
  },
});

export default CalculatorApp;
