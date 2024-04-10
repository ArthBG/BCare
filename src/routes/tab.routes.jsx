import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Category" component={Category} />
    <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabRoutes;