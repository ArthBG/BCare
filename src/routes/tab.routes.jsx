import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";
import ESG from "../screens/ESG";
import ScheduleForm from "../screens/ScheduleForm";
import Detailing from "../screens/Detailing";
import Sobrenos from "../screens/Sobrenos";

import scheduleRepository from "../models/ScheduleRepository";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const schedules = scheduleRepository.getAll();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#bb0000",
        height: 50,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-hurricane"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sobrenos"
        component={Sobrenos}
        options={{
          tabBarLabel: "Sobrenos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-headline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ESG"
        component={ESG}
        options={{
          tabBarItemStyle: {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-headline"
                color={color}
                size={26}
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="ScheduleForm"
        component={ScheduleForm}
        initialParams={{ schedule: {}, edit: false }}
        options={{
          tabBarLabel: "ScheduleForm",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-headline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Detailing"
        component={Detailing}
        options={{
          tabBarLabel: "Detailing",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-headline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
