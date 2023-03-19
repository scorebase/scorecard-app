import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import {
    AdMobBanner,
    setTestDeviceIDAsync
} from "expo-ads-admob";
const BannerAd = () => {
    const interstitialID = Platform.select({
        ios: "ca-app-pub-9611044919060171/2599887187",
        android: "ca-app-pub-9611044919060171~8269401860",
    });
    // function showInterstitial() {
    //     AdMobInterstitial.setAdUnitID(interstitialID);
    //     AdMobInterstitial.requestAdAsync().then(() => {
    //         AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
    //     });
    // }
    React.useEffect(() => {
        setTestDeviceIDAsync("EMULATOR");
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <AdMobBanner
                bannerSize="mediumRectangle"
                adUnitID="<-- Your Banner Ad Unit ID Here -->"
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={(e) => console.log(e)}
            />
        </View>
    );
};

export default BannerAd;
