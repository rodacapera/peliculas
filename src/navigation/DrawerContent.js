import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { Drawer, Switch, TouchableRipple, Text} from "react-native-paper";
import usePreference from "../hooks/usePreferences";

import Lang from "../config/Translate";//multilanguage function is imported

export default function DrawerContent(props) {
    const {navigation} = props;
    const [active, setActive] = useState("home");
    const {theme, toggleTheme} = usePreference();
    
    const onChangeScreen = (screen) =>{
        setActive(screen);
        navigation.navigate(screen);
    }

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label={Lang('home')} active={active == "home"} onPress={() => onChangeScreen('home')} />
                <Drawer.Item label={Lang('news_movies')} active={active == "news"} onPress={() => onChangeScreen('news')} />
                <Drawer.Item label={Lang('popular_movies')} active={active == "popular"} onPress={() => onChangeScreen('popular')} />
            </Drawer.Section>
            <Drawer.Section title={Lang("options")}>
                <TouchableRipple>
                    <View style={styles.preference}>
                        <Text>{Lang("dark_theme")}</Text>
                        <Switch value={theme === "dark"} onValueChange={toggleTheme} />
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});
