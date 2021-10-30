import React from "react";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";
import { APP_NAME } from "../utils/constants";
import Lang from "../config/Translate";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
    const {navigation} = props;

    const buttonLeft = (screen) => {
        switch(screen){
            case "search": 
            case "movie": 
            case "news":    
            case "popular":       
            return (
                <IconButton icon="arrow-left" onPress={()=> navigation.goBack()}/>
            )
            default: 
            return (
                <IconButton icon="menu" onPress={()=> navigation.openDrawer()}/>
            )
        }
    };

    const buttonRight = () => {
        return(
            <IconButton icon="magnify" onPress={() => navigation.navigate('search')} />
        );
    };

    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title: APP_NAME, headerLeft: () => buttonLeft("home"), headerRight: () => buttonRight()}} />
            <Stack.Screen name="movie" component={Movie} options={{title: Lang('movies'), headerTransparent: true, headerLeft: () => buttonLeft("movie"), headerRight: () => buttonRight()}} />
            <Stack.Screen name="news" component={News} options={{title: Lang('news_movies'), headerLeft: () => buttonLeft("news"), headerRight: () => buttonRight()}} />
            <Stack.Screen name="popular" component={Popular} options={{title: Lang('popular_movies'), headerLeft: () => buttonLeft("popular"), headerRight: () => buttonRight()}} />
            <Stack.Screen name="search" component={Search} options={{title: '',  headerTransparent: true, headerLeft: () => buttonLeft("search")}} />
        </Stack.Navigator>
    )
}