import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenNavigationHeader from '../../components/common/ScreenNavigationHeader'
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
const { height: windowHeight } = window;
const FinalScore = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: 20, backgroundColor: 'white', height: windowHeight }}>
        <View style={{ marginVertical: 12 }}>

          <ScreenNavigationHeader backTo='Home' />
        </View>
        <ScoreCard />
        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 12 }}><Text style={{ fontWeight: '600', fontSize: 14 }}>News</Text></View>
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>

          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam sed quaerat nemo? Id quasi placeat esse aut dolorum eveniet quia repellendus recusandae aliquid deserunt officia eius enim, numquam temporibus!</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const ScoreCard = () => {
  return (
    <View style={{ height: 300, width: '100%', backgroundColor: 'grey', marginTop: 20 }}></View>
  )
}
export default FinalScore

const styles = StyleSheet.create({})

//then you can use windowHeight as the height of your view.