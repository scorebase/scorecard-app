import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenNavigationHeader from '../../components/common/ScreenNavigationHeader'
import { Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { IClub } from '../../interface/match-interface';
import { ScoreCard } from '../../components/common/ScoreCard';
import { useAxios } from '../../components/hooks/useAxios.';
const window = Dimensions.get('window');
// StatusBar.setBarStyle('light-content',true)
const { height: windowHeight } = window;
const FinalScore = () => {
  type RootStackParamList = {
    FinalScore: { home_team: IClub, away_team: IClub, home_score: number, away_score: number, match_id: number, };
  };
  type FinalScoreScreenRouteProp = RouteProp<RootStackParamList, 'FinalScore'>;

  const route = useRoute<FinalScoreScreenRouteProp>()
  let homeTeam = route.params.home_team
  let awayTeam = route.params.away_team
  let homeScore = route.params.home_score
  let awayScore = route.params.away_score
  let matchId = route.params.match_id
  const [newEventResponse, isNewsEventLoading, isNewsEventError] = useAxios(`https://scorecard-be.herokuapp.com/news/${matchId}`)
  const [matchEventResponse, isLoading] = useAxios(`https://scorecard-be.herokuapp.com/match/event/${matchId}`)
  const goalsEvent = matchEventResponse.filter((event) => event.event_type === 'Goal')
  const redCardEvent = matchEventResponse.filter((event) => event.event_type === 'Red Card')
  const homeTeamScorers = goalsEvent.filter((goal) => goal.team.short_name === homeTeam.short_name)
  const awayTeamScorers = goalsEvent.filter((goal) => goal.team.short_name === awayTeam.short_name)
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={{ padding: 20, backgroundColor: 'white', height: windowHeight }}>
        <View style={{}}>
          <ScreenNavigationHeader backTo='Home' middleComponent={'FinalScore'} moveTo='Scores' />
        </View>
        <ScoreCard homeTeam={homeTeam} homeTeamScorers={homeTeamScorers} awayTeamScorers={awayTeamScorers} awayTeam={awayTeam} homeScore={homeScore} awayScore={awayScore} header='Full Time' />
        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 12 }}><Text style={{ fontWeight: '600', fontSize: 16 }}>Match Report </Text></View>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          {isNewsEventLoading && <Text style={{ fontStyle: 'italic' }}>loading match report</Text>}
          {isNewsEventError && <Text style={{ fontStyle: 'italic' }}>Error loading match report,try again later</Text>}
          {newEventResponse == null ? <Text style={{ textAlign: 'center', marginTop: 12 }}>No news  currently </Text> : <Text>{newEventResponse.body}</Text>}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
export default FinalScore

const styles = StyleSheet.create({
  scorer: {
    paddingBottom: 3,
    fontSize: 15,
    fontWeight: '500'
  }
})

//then you can use windowHeight as the height of your view.