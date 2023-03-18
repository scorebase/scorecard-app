import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/Standings/GroupCard';
import AppBackground from '../../components/common/ImageBackground';
import { useAxios } from '../../components/hooks/useAxios.';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../components/common/Loader';

export interface IMembers {
  StandingId: number, TeamId: number, draws: number, goals_conceded: number, goals_scored: number, losses: number, points: number, wins: number
}
const StandingsView = () => {
  const [standingsResponse, isNetworkError, isLoading, refetch] = useAxios('https://scorecard-be.herokuapp.com/standing')

  useFocusEffect(
    React.useCallback(() => {
      refetch();
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

    if (isLoading || standingsResponse.length === 0) {
      return <Loader full={true} />
    }
  // console.log('stndng res', standingsResponse)
  return (
    <View style={{ marginTop: 20, padding: 28 }}>
      <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Group Standings </Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        {standingsResponse.map((group: { title: string, members: IMembers[] }) => <GroupCard group={group.title} groupMembers={group.members} />)}
      </ScrollView>
    </View>
  )
}

export default StandingsView

const styles = StyleSheet.create({})