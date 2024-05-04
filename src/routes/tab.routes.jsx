import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import ESG from "../screens/ESG";
import Sobrenos from "../screens/Sobrenos";
import ScheduleForm from "../screens/ScheduleForm";
import ScheduleList from "../screens/ScheduleList";
import scheduleRepository from "../models/agendamentos/ScheduleRepository";

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
        name="ESG"
        component={ESG}
        options={{
          tabBarItemStyle: {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="security-network"
                color={color}
                size={26}
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="Sobrenos"
        component={Sobrenos}
        options={{
          tabBarLabel: "Sobrenos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
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
              name="form-select"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleList"
        component={ScheduleList}
        initialParams={{ schedule: schedules, edit: false }}
        options={{
          tabBarLabel: "ScheduleList",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
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
