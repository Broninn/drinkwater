import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { View, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import { Dashboard } from '../screens/Dashborad';

type ITabRoutes = {
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen = () => {
    return (
        <View style={{ flex:1,  backgroundColor: generateRandomColor(), }}>
            <Text>
                {Math.random()}
            </Text>
        </View>
    )   
}

interface IMytab {

}

export const Routes: React.FunctionComponent<IMytab> = props => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Settings" component={Screen} options={{
                title: 'Configurações',
                tabBarIcon: () => <Icon name="setting" size={20} color='#e3d'/>
            }} />
            <Tab.Screen name="Home" component={Dashboard} options={{
                title: 'Home :)',
                tabBarIcon: () => <Icon name="home" size={20} color='#e3d'/>
            }} />
            <Tab.Screen name="Profile" component={Screen} options={{
                title: 'Perfil',
                tabBarIcon: () => <Icon name="user" size={20} color='#e3d'/>
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}