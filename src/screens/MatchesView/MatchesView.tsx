import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvyLogo from '../../../assets/svg/svy-logo';
import Match from '../../components/Matches/MatchCard';
import axios from 'axios';
import { isError, useQuery } from 'react-query';
import { IMatch } from '../../interface/match-interface';
import MatchCard from '../../components/Matches/MatchCard';

const MatchesView = () => {
  const [matches, setMatches] = useState([])
  const [showNetworkError, setShowNetworkError] = useState(false);

  type matchesData = {
    data: {

    }
  }
  const fetchMatches = async (): Promise<matchesData[]> => {
    try {
      const options = {
        url: 'https://scorecard-be.herokuapp.com/match/all',
        method: 'GET',
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }
      const response = await axios(options)

      console.log('the response of the data is', response.data)
      setMatches(response.data.data)
      return
    } catch (error) {
      if (error.response) {
      } else if (error.request) {
        setShowNetworkError(true)
      }
      console.log('Error fetching match', error)
    }
  }
  const { data, isLoading, isSuccess, isError, error } = useQuery<matchesData[], Error>('matches', fetchMatches)
  let stageName = matches[0]?.type
  console.log('is Error', isError)
  if (showNetworkError) {
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
            {matches.map((match: IMatch) => (<View key={match.id}><MatchCard date_time={match.date_time} home_score={match.home_score} is_complete={match.is_complete} away_score={match.away_score} home_team={match.home_team} away_team={match.away_team} /></View>))}
          </ScrollView>
        </>
      }

    </View >
  )
}

export default MatchesView

const styles = StyleSheet.create({})