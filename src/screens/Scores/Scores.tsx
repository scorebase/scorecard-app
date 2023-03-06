import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppBackground from "../../components/common/ImageBackground";
import { ScoreCard } from "../../components/common/ScoreCard";
import ScreenNavigationHeader from "../../components/common/ScreenNavigationHeader";
import { IClub } from "../../interface/match-interface";

const Scores = () => {
  type RootStackParamList = {
    Scores: { home_team: IClub, away_team: IClub, home_score: number, away_score: number };
  };
  type ScoresScreenRouteProp = RouteProp<RootStackParamList, "Scores">;
  const route = useRoute<ScoresScreenRouteProp>();
  let homeTeam = route.params.home_team
  let awayTeam = route.params.away_team
  let homeScore = route.params.home_score
  let awayScore = route.params.away_score
  return (
    <AppBackground>
      <SafeAreaView >
        <View style={{ paddingTop: 10, paddingHorizontal: 28 }}>
          <ScreenNavigationHeader
            backTo="Home"
            middleComponent={"Scores"}
            moveTo="Home"
          />
        </View>
        <ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} homeScore={homeScore} awayScore={awayScore} />
        {/* Statistics */}
        <View style={{ marginTop: 20, padding: 28 }}>
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
      </SafeAreaView>
    </AppBackground>
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
