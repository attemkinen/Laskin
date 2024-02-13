import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const History = ({ route }) => {
  const { historyData } = route.params;
  

  
  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'auto',
    marginTop:50,
  },
});

export default History;