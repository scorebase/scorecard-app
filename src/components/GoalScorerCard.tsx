import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalScorerCard = ({ name, goals, index, goalScorers }) => {
    return (
        <View style={styles.container}>
            <View style={[{ flexDirection: 'row', borderBottomWidth: 0.4, borderBottomColor: '#727272', justifyContent: "space-between", paddingVertical: 14, alignItems: 'center' }, goalScorers.length - 1 != index ? { borderBottomColor: 'grey' } : { borderBottomColor: 'white', }]}>
                <Text style={{ fontWeight: "400", fontSize: 12 }}>{name}</Text>
                <Text style={{ fontWeight: "500", fontSize: 12 }}>{goals}</Text>
            </View>
        </View >
    )
}

export default GoalScorerCard

const styles = StyleSheet.create({
    container: {
        // height: 12,
        marginTop: 3
    }
})