import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MatchesView from './components/MatchesView';
import StandingsView from './components/StandingsView';


const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    useEffect(() => { setSelectedTab(selectedTab) }, [selectedTab])
    const shadowStyle = {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    }
    return (
        <SafeAreaView >
            <View style={{ width: '90%', backgroundColor: '#rgba(118, 118, 128, 0.12)', height: 40, alignSelf: 'center', borderRadius: 9, flexDirection: 'row', padding: 12, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 12 }}>
                <Pressable onPress={() => setSelectedTab(0)} style={[{ width: '54%', height: 32, borderRadius: 9, justifyContent: "center", alignItems: 'center', backgroundColor: selectedTab === 0 ? 'white' : "transparent" }, selectedTab === 0 ? shadowStyle : null]} ><Text style={{ fontWeight: selectedTab === 0 ? '700' : '500', fontSize: 13 }}>Matches</Text></Pressable>
                <Pressable onPress={() => setSelectedTab(1)} style={[{ width: '54%', height: 32, backgroundColor: selectedTab === 1 ? 'white' : "transparent", borderRadius: 9, justifyContent: "center", alignItems: 'center' }, selectedTab === 1 ? shadowStyle : null]}><Text style={{ fontWeight: selectedTab === 1 ? '700' : '500', fontSize: 13 }}>Standings</Text></Pressable>
            </View>
            {selectedTab === 0 ? <MatchesView /> : <StandingsView />}
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})