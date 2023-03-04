import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GroupCard from '../../components/Standings/GroupCard';

const StandingsView = () => {
  return (
    <View style={{ height: '100%', backgroundColor: 'white', marginTop: 20, padding: 28 }}>
      <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>Group Standings </Text>
      <ScrollView contentContainerStyle={{paddingBottom:120}} style={{  flex: 1 }} showsVerticalScrollIndicator={false}>
        <GroupCard group='A' />
        <GroupCard group='B' />
        <GroupCard group='C' />
        <GroupCard group='D' />
      </ScrollView>
    </View>
  )
}

export default StandingsView

const styles = StyleSheet.create({})