import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Social from "../screens/Social";
import Environmental from "../screens/Environmental";
import Governance from "../screens/Governance";



const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Environmental" component={Environmental} />
            <Stack.Screen name="Social" component={Social} />
            <Stack.Screen name="Governance" component={Governance} />

        </Stack.Navigator>
    );
};

export default StackRoutes;