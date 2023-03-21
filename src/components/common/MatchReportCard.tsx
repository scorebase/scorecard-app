import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import _ from 'lodash';

const MatchReportCard = ({ newsBody, newsTitle, newsImage }) => {
    const navigation = useNavigation()
    const [truncated, setTruncated] = useState(true);
    const toggleTruncate = () => setTruncated(!truncated);

    const truncatedText = _.truncate(newsBody, {
        length: '100',
        separator: ' ',
    });
    return (
        <Pressable onPress={() => navigation.navigate('MatchReport', { newsImage: newsImage, newsBody, newsTitle })} style={{ marginTop: 30 }}>
            <Image source={{ uri: newsImage }} style={{ width: '100%', height: 180, borderRadius: 12, }} />
            <Text style={{ fontWeight: '800', fontSize: 20, marginTop: 12, marginBottom: 6, lineHeight: 27 }}>{newsTitle}</Text>
            <Text>{truncated ? truncatedText : newsBody}</Text>
            <Pressable onPress={() => toggleTruncate()}>
                <Text style={{ fontWeight: '400', color: 'blue', textDecorationLine: "underline", paddingBottom: 2 }}>{truncated ? 'Read More' : 'Show Less'}</Text>
            </Pressable>
        </Pressable>
    )
}

export default MatchReportCard

const styles = StyleSheet.create({})