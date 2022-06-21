import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CountScreen } from "./screens/CountScreen";
import { ExpensesScreen } from "./screens/ExpensesScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { IncomesScreen } from "./screens/IncomesScreen";
import { StatisticsScreen } from "./screens/StatisticsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name="Accueil">
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Opération"
                component={HomeScreen}
              />
              <Stack.Screen name="Revenus" component={IncomesScreen} />
              <Stack.Screen name="Dépenses" component={ExpensesScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Compte" component={CountScreen} />
        <Tab.Screen name="Statistique" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}