import React from 'react'
import { Text, View, Image,StyleSheet} from "react-native"

export const ScoreCard = ({ homeTeam, awayTeam, homeScore, awayScore }) => {
    return (
        <View style={{ height: 200, width: '100%', marginTop: 20, padding: 12 }}>
            <Text style={{ textAlign: 'center', marginVertical: 15, fontWeight: '500' }}>Full Time</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '90%', alignSelf: "center", alignItems: 'center' }}>
                <View><Image source={{ uri: homeTeam.logo }} style={{ width: 55, height: 55 }} /></View>
                <Text style={{ fontSize: 25, fontWeight: '700' }}>{homeScore}{' '} - {' '}{awayScore}</Text>
                <View><Image source={{ uri: awayTeam.logo }} style={{ width: 55, height: 55 }} /></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 8, width: "90%", alignSelf: "center" }}>
                <View>
                    <Text style={styles.scorer}>Yinka 16"</Text>
                    <Text style={styles.scorer}>Lekan 45"</Text>
                </View>
                <View>
                    <Text style={styles.scorer}>Gbadebo 78"</Text>
                    <Text style={styles.scorer}>Eekial 80"</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scorer: {
        paddingBottom: 3,
        fontSize: 15,
        fontWeight: '500'
    }
})