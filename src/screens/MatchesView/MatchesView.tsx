import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvyLogo from '../../../assets/svg/svy-logo';
import Match from '../../components/Matches/Match';
import Background from '../../components/common/ImageBackground';

const MatchesView = () => {
  const club1 = {
    name: 'SEES',
    logo: '../../assets/png/SEES.png'
  }
  const club2 = {
    name: 'SVY',
    logo: <SvyLogo />
  }
  return (
    <View style={{ height: '100%', marginTop: 20, padding: 28 }}>
        <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Ules Cup Matches </Text>
        <ScrollView style={{ paddingTop: 12 }} showsVerticalScrollIndicator={false}>
          <Match club1={club1} club2={club2} />
          <Match club1={club1} club2={club2} />
        </ScrollView>
    </View>
  )
}

export default MatchesView

const styles = StyleSheet.create({})