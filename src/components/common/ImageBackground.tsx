import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const AppBackground = ({ children }) => {
    return (
        <ImageBackground source={require('../../../assets/png/AppBackground.png')} style={styles.image}>
            <View style={styles.overlay} />
            {children}
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default AppBackground;
