import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { CaretLeft, Info } from 'phosphor-react'

const ScreenNavigationHeader = ({ backTo }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigation.navigate(backTo as never)}><CaretLeft weight='regular' size={23}/></Pressable>
            <View><Text style={{fontWeight:'600',fontSize:17}}>Final Score</Text></View>
            <Pressable ><Info weight='regular' size={23}/></Pressable>
        </View>
    )
}

export default ScreenNavigationHeader

const styles = StyleSheet.create({})