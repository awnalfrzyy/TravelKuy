import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Opening from "../screen/onboarding/opening";
import Tentangkami from "../screen/onboarding/Tentangkami";
import Stepone from "../screen/onboarding/Stepone";
import Steptwo from "../screen/onboarding/Steptwo";
import Stepthree from "../screen/onboarding/Stepthree";
import Discon from "../screen/home/discon"
import Settings from "../screen/home/settings"
import Home from "../screen/home/home"
import Profil from "../screen/profil/profil";
import Notification from "../screen/notificaltion/notification";
import Wishlist from "../screen/Wishlist/wishlist";
import BottomTabNavigator from "./buttonTabNavigator";

export type RootStackParamList = {
    Opening: undefined;
    Tentangkami: undefined;
    Stepone: undefined;
    Steptwo: undefined;
    Stepthree: undefined;
    Discon: undefined;
    Settings: undefined;
    Home: undefined;
    Profil: undefined;
    Wishlist: undefined;
    Notification: undefined;
    Main: undefined;


};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "fade",
        }}>
            {/* Onboarding */}
            <Stack.Screen name="Opening" component={Opening} />
            <Stack.Screen name="Tentangkami" component={Tentangkami} />
            <Stack.Screen name="Stepone" component={Stepone} />
            <Stack.Screen name="Steptwo" component={Steptwo} />
            <Stack.Screen name="Stepthree" component={Stepthree} />
            <Stack.Screen name="Main" component={BottomTabNavigator} />




        </Stack.Navigator>
    );
}
