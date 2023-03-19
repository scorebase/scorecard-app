import React from 'react'
import { Text, View, Image, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

export const ScoreCard = ({ homeTeam, awayTeam, homeScore, awayScore, header, homeTeamScorers, awayTeamScorers }) => {

    const homeTeamScorerMap = {}
    const awayTeamScorermap = {}
    homeTeamScorers.forEach((scorer) => {
        if (homeTeamScorerMap[scorer.player.name]) {
            homeTeamScorerMap[scorer.player.name]++
        } else homeTeamScorerMap[scorer.player.name] = 1
    })
    awayTeamScorers.forEach((scorer) => {
        if (awayTeamScorermap[scorer.player.name]) {
            awayTeamScorermap[scorer.player.name]++
        } else awayTeamScorermap[scorer.player.name] = 1
    })
    const FootballIcons = (numberOfGoals: number) => {
        const ballsIcons = []
        for (let i = 0; i < numberOfGoals; i++) {
            ballsIcons.push(<View style={{ marginRight: 4 }}><FontAwesome name="soccer-ball-o" size={12} color="black" /></View>)
        }
        return (
            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 4 }}>
                {ballsIcons}
            </View>
        )
    }
    return (
        <View style={{ height: 200, width: '100%', marginTop: 20,  }}>
            <Text style={{ textAlign: 'center', marginVertical: 15, fontWeight: '500' }}>{header}</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%', alignSelf: "center", alignItems: 'center' }}>
                <View style={{ alignItems: 'center',}}>
                    <Text style ={{fontWeight:'700',fontSize:20}}>{homeTeam.short_name}</Text>
                    <Image source={{ uri: homeTeam.logo }} style={{ width: 55, height: 55 }} />
                </View>
                <Text style={{ fontSize: 25, fontWeight: '700' }}>{homeScore}{' '} - {' '}{awayScore}</Text>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style ={{fontWeight:"700",fontSize:20}}>{awayTeam.short_name}</Text>
                    <Image source={{ uri: awayTeam.logo }} style={{ width: 55, height: 55 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 8, width: "100%", alignSelf: "center" }}>
                <View style={{ justifyContent: 'center' }}>
                    {Object.entries(homeTeamScorerMap).map((scorer: any) => <Text key={scorer.id} style={styles.scorer}>{scorer[0]} <View>{FootballIcons(scorer[1])}</View> </Text>)}
                </View>
                <View>
                    {Object.entries(awayTeamScorermap).map((scorer: any) => <Text key={scorer.id} style={styles.scorer}>{scorer[0]} <View>{FootballIcons(scorer[1])}</View> </Text>)}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scorer: {
        paddingBottom: 3,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 3,
        justifyContent: 'center'
    }
})