import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";
import ESG from "../screens/ESG";

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#bb0000',
        height: 50,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />


      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="weather-hurricane" color={color} size={26} />
        ),
      }} />


      <Tab.Screen name="Category" component={Category} options={{
        tabBarLabel: 'Category',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="view-headline" color={color} size={26} />
        ),
      }} />

      <Tab.Screen name="ESG" component={ESG} options={{
        tabBarItemStyle: {
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-headline" color={color} size={26} />
          ),
        }
      }} />


    </Tab.Navigator>
  );
};

export default TabRoutes;
