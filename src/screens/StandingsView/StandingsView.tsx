import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GroupCard from '../../components/Standings/GroupCard';
import AppBackground from '../../components/common/ImageBackground';

const StandingsView = () => {
  return (
    // <AppBackground>
      <View style={{  marginTop: 20, padding: 28 }}>
        <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Group Standings </Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
          <GroupCard group='A' />
          <GroupCard group='B' />
          <GroupCard group='C' />
          <GroupCard group='D' />
        </ScrollView>
      </View>
    // </AppBackground>
  )
}

export default StandingsView

const styles = StyleSheet.create({})