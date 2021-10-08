import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {Icon} from 'react-native-elements'

import Account from '../Screens/Account'
import Favorites from '../Screens/Favorites'
import Restaurants from '../Screens/Restaurants'
import Search from '../Screens/Search'
import TopRestaurants from '../Screens/TopRestaurants'

const Tab = createBottomTabNavigator()

export default function Navigation() {

    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;

            case "favorites":
                iconName = "heart-outline"
                break;

            case "top-restaurants":
                iconName = "star-outline"
                break;

            case "search":
                iconName = "magnify"
                break;

            case "account":
                iconName = "home-outline"
                break;
        }

        return(
            <Icon
                type="material-community"
                name= {iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOption={{
                    inactiveTintColor:"#a17dc3",
                    activeTintColor:"#442484"
                
                }}
                screenOptions={({route}) =>({
                    tabBarIcon: ({color}) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="restaurants"
                    component={Restaurants}
                    options={{title: 'Restaurantes'}}
                />

                <Tab.Screen
                    name="favorites"
                    component={Favorites}
                    options={{title: 'Favoritos'}}
                />

                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurants}
                    options={{title: 'Top 5'}}
                />

                <Tab.Screen
                    name="search"
                    component={Search}
                    options={{title: 'Buscar'}}
                />

                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{title: 'Cuenta'}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
