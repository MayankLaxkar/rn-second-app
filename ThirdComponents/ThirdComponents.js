import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesScreen from './NewScreen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealOverViewScreen from './NewScreen/MealOverViewScreen';
import MealDetailScreen from './NewScreen/MealDetailScreen';
import FavouriteScreen from './NewScreen/FavouriteScreen';
import FavouriteContextProvider from './store/contextFolder/favourite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
    return <Drawer.Navigator 
    screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' }
    }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen}
         options={{
            title:'All Categories'
         }}/>
        <Drawer.Screen name="Favourites" component={FavouriteScreen} />       
    </Drawer.Navigator>
}

function ThirdComponents() {
    return <>
        <StatusBar style="light" />
        <FavouriteContextProvider>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#3f2f25' }

                }}  >
                <Stack.Screen
                    name="MealsCategories"
                    component={DrawerNavigator}
                    options={{
                        title: 'All Categories',
                        headerShown:false
                    }} />
                <Stack.Screen name="MealOverViewScreen" component={MealOverViewScreen}/>
                <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} 
                options={{
                    title:'About the Meal'
                }}  />
            </Stack.Navigator>
        </NavigationContainer>
        </FavouriteContextProvider>
    </>
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    }

})

export default ThirdComponents;