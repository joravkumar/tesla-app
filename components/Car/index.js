import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";

export default function Car(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={props.image}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>{props.tagLine}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button type="primary">Custom Order</Button>
        <Button type="secondary">Existing Invevntory</Button>
      </View>
    </View>
  );
}
