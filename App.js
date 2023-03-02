import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet, Text, View} from "react-native";
import Home from "./src/Home";
import FinalScore from "./src/screens/FinalScore";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="FinalScore"
					component={FinalScore}
				/>
				{/* <StatusBar style="auto" /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
