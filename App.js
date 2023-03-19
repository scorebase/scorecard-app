import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Scores from "./src/screens/Scores/Scores";
import FinalScore from "./src/screens/FinalScore";
import AppBackground from "./src/components/common/ImageBackground";
import {SafeAreaView} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "react-query";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {useEffect, useRef, useState} from "react";
import {Button, Text} from "react-native";
import MatchReport from "./src/screens/MatchReportScreen/MatchReport";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});
async function sendPushNotification(expoPushToken) {
	const message = {
		to: expoPushToken,
		sound: "default",
		title: "Original Title",
		body: "And here is the body!",
		data: {someData: "goes here"},
	};

	await fetch("https://exp.host/--/api/v2/push/send", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Accept-encoding": "gzip, deflate",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	});
}
async function registerForPushNotificationsAsync() {
	let token;
	if (Device.isDevice) {
		const {status: existingStatus} =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const {status} = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== "granted") {
			alert("Failed to get push token for push notification!");
			return;
		}
		token = (
			await Notifications.getExpoPushTokenAsync({
				projectId: "42844649-1a70-4476-85ac-4613dc56d465",
			})
		).data;
		console.log(token);
	} else {
		alert("Must use physical device for Push Notifications");
	}

	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}

	return token;
}

const Stack = createNativeStackNavigator();

export default function App() {
	const [expoPushToken, setExpoPushToken] = useState("");
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5000,
				cacheTime: 60000,
			},
		},
	});
	useEffect(() => {
		registerForPushNotificationsAsync().then(token =>
			setExpoPushToken(token)
		);

		notificationListener.current =
			Notifications.addNotificationReceivedListener(notification => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(response => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(
				responseListener.current
			);
		};
	}, []);
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle={"dark-content"}
			/>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					{/* <Text>Your expo push token: {expoPushToken}</Text>
						<Text>
							Title:{" "}
							{notification && notification.request.content.title}{" "}
						</Text>
						<Text>
							Body:{" "}
							{notification && notification.request.content.body}
						</Text>
						<Text>
							Data:{" "}
							{notification &&
								JSON.stringify(
									notification.request.content.data
								)}
						</Text>
						<Button
							title="Press to Send Notification"
							onPress={async () => {
								await sendPushNotification(expoPushToken);
							}}
						/>  */}
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