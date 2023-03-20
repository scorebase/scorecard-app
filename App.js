import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Scores from "./src/screens/Scores/Scores";
import FinalScore from "./src/screens/FinalScore";
import {SafeAreaView} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "react-query";
import MatchReport from "./src/screens/MatchReportScreen/MatchReport";

const Stack = createNativeStackNavigator();

export default function App() {

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5000,
				cacheTime: 60000,
			},
		},
	});
	
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle={"dark-content"}
			/>
			<QueryClientProvider client={queryClient}>
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
						<Stack.Screen
							name="MatchReport"
							component={MatchReport}
						/>
						{/* <StatusBar style="auto" /> */}
					</Stack.Navigator>
				</NavigationContainer>
			</QueryClientProvider>
		</SafeAreaView>
	);
}