import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { CaretLeft, Info } from "phosphor-react";
import { Ionicons } from "@expo/vector-icons";

const ScreenNavigationHeader = ({ backTo, middleComponent }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable onPress={() => navigation.navigate(backTo as never)}>
        <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
      </Pressable>
      <View>
        <Text style={{ fontWeight: "600", fontSize: 17 }}>
          {middleComponent}
        </Text>
      </View>
      <Pressable>
        <Ionicons
          name="md-information-circle-outline"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default ScreenNavigationHeader;

const styles = StyleSheet.create({});
