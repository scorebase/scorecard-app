import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenNavigationHeader from '../../components/common/ScreenNavigationHeader'
import { Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { IClub } from '../../interface/match-interface';
const window = Dimensions.get('window');
// StatusBar.setBarStyle('light-content',true)
const { height: windowHeight } = window;
const FinalScore = () => {
  type RootStackParamList = {
    FinalScore: { club1: IClub, club2: IClub };
  };
  type FinalScoreScreenRouteProp = RouteProp<RootStackParamList, 'FinalScore'>;

  const route = useRoute<FinalScoreScreenRouteProp>()
  let homeTeam = route.params.club1
  let awayTeam = route.params.club2
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={{ padding: 20, backgroundColor: 'white', height: windowHeight }}>
        <View style={{}}>
          <ScreenNavigationHeader backTo='Home' middleComponent={'FinalScore'} moveTo='Scores' />
        </View>
        <ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} />
        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 12 }}><Text style={{ fontWeight: '600', fontSize: 16 }}>News</Text></View>
        <ScrollView style={{  }} showsVerticalScrollIndicator={false}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ratione, porro nihil pariatur aperiam facilis quos enim et neque minima quo odio dolorem consequuntur voluptatem amet ullam quis eveniet!</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ratione, porro nihil pariatur aperiam facilis quos enim et neque minima quo odio dolorem consequuntur voluptatem amet ullam quis eveniet!</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ratione, porro nihil pariatur aperiam facilis quos enim et neque minima quo odio dolorem consequuntur voluptatem amet ullam quis eveniet!</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ratione, porro nihil pariatur aperiam facilis quos enim et neque minima quo odio dolorem consequuntur voluptatem amet ullam quis eveniet!</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit ratione, porro nihil pariatur aperiam facilis quos enim et neque minima quo odio dolorem consequuntur voluptatem amet ullam quis eveniet!</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const ScoreCard = ({ homeTeam, awayTeam }) => {
  return (
    <View style={{ height: 200, width: '100%', marginTop: 20, padding: 12 }}>
      <Text style={{ textAlign: 'center', marginVertical: 15, fontWeight: '500' }}>Full Time</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '90%', alignSelf: "center", alignItems: 'center' }}>
        <View><Image source={homeTeam.logo} style={{ width: 55, height: 55 }} /></View>
        <Text style={{ fontSize: 25, fontWeight: '700' }}>2 - 2</Text>
        <View><Image source={awayTeam.logo} style={{ width: 55, height: 55 }} /></View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 8, width: "90%", alignSelf: "center" }}>
        <View>
          <Text style={styles.scorer}>Yinka 16"</Text>
          <Text style={styles.scorer}>Lekan 45"</Text>
        </View>
        <View>
          <Text style={styles.scorer}>Gbadebo 78"</Text>
          <Text style={styles.scorer}>Eekial 80"</Text>
        </View>
      </View>
    </View>
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