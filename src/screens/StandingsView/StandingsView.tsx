import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/Standings/GroupCard';
import AppBackground from '../../components/common/ImageBackground';
import { useAxios } from '../../components/hooks/useAxios.';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import GoalScorerCard from '../../components/GoalScorerCard';
export interface IMembers {
  StandingId: number, TeamId: number, draws: number, goals_conceded: number, goals_scored: number, losses: number, points: number, wins: number
}
const StandingsView = () => {
  const [standingsResponse, isNetworkError, isLoading, refetch] = useAxios('https://scorecard-be.herokuapp.com/standing')
  const [goalScorers, isGoalScorersError, isGoalScoreresLoading, refetchGoalScorers] = useAxios('https://scorecard-be.herokuapp.com/stats/goalscorers')
  const [playmakers, isPlayMakersError, isPlayMakersLoading, refetchPlaymakers] = useAxios('https://scorecard-be.herokuapp.com/stats/playmakers')
  console.log('the goalscorers  are', playmakers)
  useFocusEffect(
    React.useCallback(() => {
      refetch();
      refetchGoalScorers()
      refetchPlaymakers()
    }, [])
  );
  if (isNetworkError) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
      }>
        <View style={{
          backgroundColor: '#F7CAC9',
          padding: 10,
          borderRadius: 5,
          alignSelf: 'stretch',
          marginHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          }, shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>

          <Text style={{
            color: '#6D4C41',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
            Network error: please check your internet connection and try again.
          </Text>
        </View>
      </View >
    )
  }
  return (
    <View style={{ marginTop: 20, padding: 28 }}>

      {isLoading || standingsResponse.length === 0 ? <View style={{ height: '100%', alignItems: "center", justifyContent: 'center' }}>
        <ActivityIndicator size="large" animating={true} color={'blue'} />
      </View> :
        <>
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={{ paddingTop: 12 }} showsVerticalScrollIndicator={false}>

            {standingsResponse.map((group: { title: string, members: IMembers[] }, index) => {
              return (
                 <>
                  {index === 0 && <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Group Standings </Text>}
                  <GroupCard group={group.title} groupMembers={group.members} />
                </>)
            }

            )}
                {goalScorers.length !== 0 &&
              <View>
                <Text style={{ fontWeight: '500', fontSize: 14, marginTop: 18 }}>Goalscorers</Text>
                <View style={{
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  borderRadius: 12,
                  shadowColor: 'black',
                  backgroundColor: 'white',
                  marginTop: 25
                }}>
                  <Text style={{ marginVertical: 12, fontWeight: "500", fontSize: 13 }}>Goals Scored</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: '500', fontSize: 12 }}>Player Name</Text>
                    <Text style={{ fontWeight: '600', fontSize: 12 }}>Goals</Text>
                  </View>
                  {goalScorers.map((scorer, index) =>
                    <View key={index}>
                      <GoalScorerCard goalScorers={goalScorers} index={index} goals={scorer.goals} name={scorer.player.name} />
                    </View>
                  )}
                </View>
              </View>
            }
            {playmakers.length !== 0 &&
              <View>
                <Text style={{ fontWeight: '500', fontSize: 14, marginTop: 18 }}>Assist Providers</Text>
                <View style={{
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  borderRadius: 12,
                  shadowColor: 'black',
                  backgroundColor: 'white',
                  marginTop: 25,
                }}>
                  <Text style={{ marginVertical: 12, fontWeight: "500", fontSize: 13 }}>Assists</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: '500', fontSize: 12 }}>Player Name</Text>
                    <Text style={{ fontWeight: '600', fontSize: 12 }}>Assists</Text>
                  </View>
                  {playmakers.map((assister, index) =>
                    <View key={index}>
                      <GoalScorerCard goalScorers={playmakers} index={index} goals={assister.assists} name={assister.player.name} />
                    </View>
                  )}
                </View>
              </View>

            }

          </ScrollView>
        </>
      }
    </View>
  )
}

export default StandingsView

const styles = StyleSheet.create({})