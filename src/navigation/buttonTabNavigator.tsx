import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home/home";
import Wishlist from "../screen/Wishlist/wishlist";
import Profil from "../screen/profil/profil";
import Notification from "../screen/notificaltion/notification";
import { LucideHome, BadgePercent, Bell, User } from "lucide-react-native";

export type BottomTabParamList = {
    Home: undefined;
    Deals: undefined;
    Notifications: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#999",
                tabBarStyle: { height: 110, paddingBottom: 70, paddingTop: 10 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => <LucideHome size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Deals"
                component={Wishlist}
                options={{
                    tabBarLabel: "Deals",
                    tabBarIcon: ({ color, size }) => <BadgePercent size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notification}
                options={{
                    tabBarLabel: "Notifications",
                    tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profil}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}
