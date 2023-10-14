import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../screen/PostScreen";
import DetailScreen from "../screen/DetailScreen";
import PostActionsScreen from "../screen/PostActionsScreen";
import { SPACING } from "../config/spacing";
import { colors } from "../config/colors";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: SPACING * 2,
          flex: 1,
          backgroundColor: colors.black,
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={PostScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="PostActionScreen" component={PostActionsScreen} />
    </Stack.Navigator>
  );
};

// export default Navigation;
