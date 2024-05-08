import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import ESG from "../screens/ESG";
import Sobrenos from "../screens/Sobrenos";
import ScheduleForm from "../screens/ScheduleForm";
import ESGAcessory from "../screens/ESGAccessory";
import ScheduleList from "../screens/ScheduleList";
import scheduleRepository from "../models/agendamentos/ScheduleRepository";
import Social from "../screens/Social";
import Environmental from "../screens/Environmental";
import Governance from "../screens/Governance";
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
        name="clinic"
        component={ESGAcessory}
        options={{
          tabBarLabel: "Clínica",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="hospital-building"
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
          tabBarLabel: "ESG",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="leaf"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre Nós"
        component={Sobrenos}
        options={{
          tabBarLabel: "Sobre Nós",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamento"
        component={ScheduleForm}
        initialParams={{ schedule: null, edit: false }}
        options={{
          tabBarLabel: "Agendamento",
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
        name="Agenda"
        component={ScheduleList}
        initialParams={{ schedule: null, edit: false }}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />

      <Tab.Screen
        name="Environmental"
        component={Environmental}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />

      <Tab.Screen
        name="Governance"
        component={Governance}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
