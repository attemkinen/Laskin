
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ShoppingListApp = ({ navigation }) => {
  const [goods, setGoods] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setGoods(goods);
    setData([...data, { key: `${goods}` }]);
  };

  const handleClear = () => {
    setData([]);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="input items"
        value={goods}
        onChangeText={setGoods}
      />
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={handleAdd} />
        <Button title="CLEAR" onPress={handleClear} />
        <Button title="Back" onPress={() =>navigation.navigate('CalculatorApp')} />
      </View>
      <Text style={styles.resultText}>Ostoslista:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 10,
    padding: 10,
    width: 150,
  },
  resultText: {
    fontSize: 20,
    marginTop: 16,
    color: "blue",
  },
  FlatlistContainer: {
    color: "blue",
  },
});
export default ShoppingListApp;