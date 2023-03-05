import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Scores from "./src/screens/Scores/Scores";
import FinalScore from "./src/screens/FinalScore";
import AppBackground from "./src/components/common/ImageBackground";
import {SafeAreaView} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		
			<SafeAreaView style={{flex: 1}}>
				<StatusBar translucent backgroundColor="transparent" />
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
						<Stack.Screen name="Scores" component={Scores} />
						{/* <StatusBar style="auto" /> */}
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
	);
}
