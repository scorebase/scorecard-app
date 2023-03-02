import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMatch } from '../../interface/match-interface';
import { useNavigation } from '@react-navigation/native';

const Match = ({ club1, club2 }: IMatch) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => navigation.navigate('FinalScore' as never)}
            style={{
                width: '98%', backgroundColor: 'white', height: 80, alignItems: 'center', justifyContent: "space-evenly", shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                borderRadius: 12,
                elevation: 3,
                flexDirection: 'row',
                alignSelf: 'center', marginVertical: 16

            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{club1.name} </Text>
                <View>{club1.logo}</View>
            </View>
            <View style={{ justifyContent: 'center', }}>
                <View><Text style={{ fontWeight: '300' }}>13 March 2023</Text>
                    <Text style={{ textAlign: 'center', fontWeight: '300' }}>15:00</Text></View>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{club2.name} </Text>
                <View>{club2.logo}</View>
            </View>
        </Pressable>
    )
}

export default Match

const styles = StyleSheet.create({})