import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/Standings/GroupCard';
import AppBackground from '../../components/common/ImageBackground';
import { useAxios } from '../../components/hooks/useAxios.';
import { useFocusEffect } from '@react-navigation/native';
export interface IMembers {
  StandingId: number, TeamId: number, draws: number, goals_conceded: number, goals_scored: number, losses: number, points: number, wins: number
}
const StandingsView = () => {
  const [standingsResponse, setStadingsResponse, isLoading, refetch] = useAxios('https://scorecard-be.herokuapp.com/standing')

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

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