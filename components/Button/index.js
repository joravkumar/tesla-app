import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button(props) {
  const backgroundColor = props.type === "primary" ? "#171A20CC" : "white";
  const textColor = props.type === "primary" ? "#fff" : "#171A20";
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        onPress={() => alert("Clicked")}
        style={[styles.btn, { backgroundColor }]}
      >
        <Text style={[styles.btnText, { color: textColor }]}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
