import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Category" component={Category} />
    <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackRoutes;