import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const Loader = ({ full }) => (
  <View style={full ? styles.full : styles.normal}>
    <ActivityIndicator
      animating={true}
      color={MD2Colors.blue700}
      size={full ? "large" : "small"}
    />
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  full: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  normal: {
    padding: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
