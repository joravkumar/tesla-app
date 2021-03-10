import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import cars from "./cars";
import Car from "./components/Car";

const { height } = Dimensions.get("screen");


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <FlatList
          data={cars}
          renderItem={({ item }) => (
            <Car name={item.name} tagLine={item.tagLine} image={item.image} />
          )}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={height}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    width: "100%",
  },
});
