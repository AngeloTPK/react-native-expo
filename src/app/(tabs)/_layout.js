import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
// import { StackScreen } from 'react-native-screens';

export default function layout() {
    return (
        <>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: "#df5c10",
                tabBarInactiveTintColor: "#fff",
                tabBarLabelStyle: {
                    fontSize: 10
                },
                tabBarIconStyle: {
                    height: 25
                },
                tabBarStyle: {
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'absolute',
                    backgroundColor: "#000000e7",
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }
            }}>
                <Tabs.Screen name='home'
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome name={'Home'} size={24} color={color} />
                    }} />
                <Tabs.Screen name='contact'
                    options={{ tabBarLabel: 'contato' }} />
                <Tabs.Screen name='contaInfo' component={HiddenScreen} options={{
                    tabBarButton: () => null
                }} />
            </Tabs>
        </>
    )
};