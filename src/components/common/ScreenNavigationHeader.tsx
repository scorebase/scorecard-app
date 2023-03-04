import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ScreenNavigationHeader = ({ backTo, middleComponent, moveTo }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ width: '57%', flexDirection: 'row', justifyContent: "space-between", }}>
        <Pressable onPress={() => navigation.navigate(backTo as never)}>
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        </Pressable>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 17 }}>
            {middleComponent}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenNavigationHeader;

const styles = StyleSheet.create({});
