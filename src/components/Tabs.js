import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, StyleSheet, Icon, Image } from "react-native";
import Home from "../screens/Home";
import Spending from "../screens/Spending";
import Profile from "../screens/Profile";
import Trade from "../screens/Trade";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: colors.secondary,
                },
                borderTopWidth: 10,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 10,
                shadowRadius: 10,
                elevation: 10,
            }}
        >
            <Tab.Screen 
                name="Home"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo 
                            name="home" 
                            size={30} 
                            style={{
                                color: focused ? colors.tertiary : colors.primary,
                            }}
                        />
                    ),
                }}
            >
                {() => <Home />}
            </Tab.Screen>
            <Tab.Screen 
                name="Trade"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="swap"
                            size={30}
                            style={{
                                color: focused ? colors.tertiary : colors.primary,
                            }}
                        />
                    ),
                }}
            >
                {() => <Trade />}
            </Tab.Screen>
            <Tab.Screen 
                name="Spending"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="wallet"
                            size={30}
                            style={{
                                color: focused ? colors.tertiary : colors.primary,
                            }}
                        />
                    ),
                }}
            >
                {() => <Spending />}
            </Tab.Screen>
            <Tab.Screen 
                name="Profile" 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="person"
                            size={30}
                            style={{
                                color: focused ? colors.tertiary : colors.primary,
                            }}
                        />
                    ),
                }}
            >
                {(props) => <Profile {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;