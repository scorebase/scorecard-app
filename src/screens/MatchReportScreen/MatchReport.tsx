import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const MatchReport = () => {
    const route = useRoute()
    const newsImage = route.params.newsImage
    const newsBody = route.params.newsBody
    const newsTitle = route.params.newsTitle
    return (
        <View>
            <Image source={{ uri: newsImage }} style={{ width: '100%', height: 180, }} />
            <View style={{ padding: 12 }}>
                <Text style={{ fontWeight: '800', marginVertical: 4, fontSize: 20 }}>{newsTitle}</Text>
                <Text>{newsBody}</Text>
            </View>
        </View>
    )
}

export default MatchReport

const styles = StyleSheet.create({})