import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenNavigationHeader from "../../components/common/ScreenNavigationHeader";
import { IClub } from "../../interface/match-interface";

const Scores = () => {
  type RootStackParamList = {
    Scores: { club1: IClub; club2: IClub };
  };
  type ScoresScreenRouteProp = RouteProp<RootStackParamList, "Scores">;
  const route = useRoute<ScoresScreenRouteProp>();
  let homeTeam = route.params.club1;
  let awayTeam = route.params.club2;
  return (
    <View style={{ height: "100%", backgroundColor: "white", padding: 20 }}>
      <View style={{ paddingTop: 30 }}>
        <ScreenNavigationHeader
          backTo="Home"
          middleComponent={"Scores"}
          moveTo="Home"
        />
      </View>
      <ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} />
      {/* Statistics */}
      <View style={{ width: "100%", marginTop: 20, padding: 12 }}>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontWeight: "500",
            fontSize: 18,
            paddingBottom: 10,
          }}
        >
          Statistics
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <StatsCard homeTeamStat={10} awayTeamStat={10} title="Yellow Cards" />
          <StatsCard homeTeamStat={10} awayTeamStat={10} title="Red Cards" />
        </View>
      </View>
    </View>
  );
};

export default Scores;

const styles = StyleSheet.create({
  scorer: {
    paddingBottom: 3,
    fontSize: 13,
    fontWeight: "400",
  },
});

const ScoreCard = ({ homeTeam, awayTeam }) => {
  return (
    <View style={{ height: 200, width: "100%", marginTop: 20, padding: 12 }}>
      <Text
        style={{ textAlign: "center", marginVertical: 15, fontWeight: "500" }}
      >
        81'
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Image source={homeTeam.logo} style={{ width: 55, height: 55 }} />
        </View>
        <Text style={{ fontSize: 25, fontWeight: "700" }}>2 - 2</Text>
        <View>
          <Image source={awayTeam.logo} style={{ width: 55, height: 55 }} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <View>
          <Text style={styles.scorer}>Yinka 16'</Text>
          <Text style={styles.scorer}>Lekan 45'</Text>
        </View>
        <View>
          <Text style={styles.scorer}>Gbadebo 78'</Text>
          <Text style={styles.scorer}>Eekial 80'</Text>
        </View>
      </View>
    </View>
  );
};

interface IStatsCard {
  homeTeamStat: string | number;
  awayTeamStat: string | number;
  title: string;
}

const StatsCard = ({ homeTeamStat, awayTeamStat, title }: IStatsCard) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      paddingVertical: 15,
    }}
  >
    <Text style={{ fontSize: 14, fontWeight: "600" }}>{homeTeamStat}</Text>
    <Text style={{ fontSize: 16, fontWeight: "300" }}>{title}</Text>
    <Text style={{ fontSize: 14, fontWeight: "600" }}>{awayTeamStat}</Text>
  </View>
);
