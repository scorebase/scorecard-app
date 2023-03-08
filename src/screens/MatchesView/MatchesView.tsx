import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvyLogo from '../../../assets/svg/svy-logo';
import Match from '../../components/Matches/MatchCard';
import axios from 'axios';
import { isError, useQuery } from 'react-query';
import { IMatch } from '../../interface/match-interface';
import MatchCard from '../../components/Matches/MatchCard';
import { useAxios } from '../../components/hooks/useAxios.';

const MatchesView = () => {
  const [response, isNetworkError, isLoading] =  useAxios('https://scorecard-be.herokuapp.com/match/all')
  let stageName = response[0]?.type
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
    <View style={{ height: '100%', marginTop: 20, padding: 28 }}>
      <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Ules Cup Matches </Text>

      {isLoading ? <View style={{ height: '100%', alignItems: "center", justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View> :
        <>
          <Text style={{ marginTop: 12 }}>{stageName}</Text>
          <ScrollView style={{ paddingTop: 12 }} showsVerticalScrollIndicator={false}>
            {response.map((match: IMatch) => (<View key={match.id}><MatchCard id={match.id} date_time={match.date_time} home_score={match.home_score} is_complete={match.is_complete} away_score={match.away_score} home_team={match.home_team} away_team={match.away_team} /></View>))}
          </ScrollView>
        </>
      }

    </View >
  )
}

export default MatchesView

const styles = StyleSheet.create({})