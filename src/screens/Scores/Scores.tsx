import React from "react";
import { View, Text } from "react-native";
import ScreenNavigationHeader from "../../components/common/ScreenNavigationHeader";

const Scores = () => {
    return (
      <View style={{ height: "100%", backgroundColor: "white", padding: 20 }}>
        <ScreenNavigationHeader
          backTo="Home"
          middleComponent={"Scores"}
          moveTo="  Home"
        />
        <Text
          style={{ textAlign: "center", marginVertical: 15, fontWeight: "500" }}
        >
          Scores Component
        </Text>
      </View>
    );
};

export default Scores;
