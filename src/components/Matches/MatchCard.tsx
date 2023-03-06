import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IClub, IMatch } from '../../interface/match-interface';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';

const MatchCard = ({ home_team, away_team, home_score, away_score, is_complete: matchIsComplete, date_time }: IMatch) => {

    const [isMatchOngoing] = useState(home_score !== null)
    type RootStackParamList = {
        FinalScore: { home_team: IClub, away_team: IClub, home_score: number, away_score: number };
        Scores: { club1: IClub, club2: IClub };
    };
    const isoDate = date_time;
    let dateOfMatch = moment(isoDate).format('dddd, MMMM Do')
    let timeOfMatch = moment(isoDate).format('h:mm')
    type MatchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FinalScore' | 'Scores'>;
    const navigation = useNavigation<MatchScreenNavigationProp>()

    const handlePress = () => {
        matchIsComplete ?
            navigation.navigate("FinalScore", {
                home_team,
                away_team,
                home_score,
                away_score
            }) :
            navigation.navigate("Scores", {
                club1: { ...home_team, logo: home_team.logo },
                club2: { ...away_team, logo: away_team.logo },
            });
    }
    return (
        <Pressable
            onPress={() => handlePress()}
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
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{home_team.short_name} </Text>
                <View><Image source={{ uri: home_team.logo }} style={{ width: 25, height: 25 }} /></View>
            </View>
            <View style={{ justifyContent: 'center', }}>
                {isMatchOngoing ?
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{home_score}{' '} - {' '}{away_score}</Text>
                        <Text style={{ textAlign: 'center', fontWeight: "600", marginTop: 5, color: 'green' }}>{matchIsComplete ? <Text style={{ color: 'black' }} >FT</Text> : 'live'}</Text>
                    </View> :
                    <View>
                        <Text style={{ fontWeight: '300' }}>{dateOfMatch}</Text>
                        <Text style={{ textAlign: 'center', fontWeight: '300' }}>{timeOfMatch}</Text>
                    </View>
                }
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{away_team.short_name} </Text>
                <View><Image source={{ uri: away_team.logo }} style={{ width: 25, height: 25 }} /></View>
            </View>
        </Pressable>
    )
}

export default MatchCard

const styles = StyleSheet.create({})